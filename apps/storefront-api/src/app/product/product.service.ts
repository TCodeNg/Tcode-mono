import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Product,
  ProductDoc,
  ProductDto,
  ProductQueryFilter,
  ProductResponse,
  RateProductDto,
  Rating
} from '@tcode/api-interface';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { from, Observable, of, throwError } from 'rxjs';
import { ACLUtils } from '@tcode/acl-util';
import { catchError, exhaustMap, map, pluck, switchMap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<ProductDoc>,
    @InjectModel('Rating') private readonly ratingModel: Model<Rating>
  ) {
  }

  async createProduct(dto: ProductDto, userId: string) {
    const acl = ACLUtils.generate(dto.acl, userId, true);
    return await this.productModel.create({ ...dto, acl, status: 'pending' } as any);
  }

  getProduct(id: string, userId: string) {
    const _id = mongoose.Types.ObjectId(id);
    return from(this.productModel.aggregate(
      [
        {
          $match: {
            '_id': _id,
            removed: false,
            $or: [
              {
                'acl.*.read': true

              },
              {
                [`acl.${userId}.read`]: true

              },
              {
                [`acl.friendsOf_${userId}.read`]: true
              }
            ]
          }
        },
        ProductService.getCategoryStage(),
        ...ProductService.getCurrencyStage(),
        ...ProductService.getRatingStage(userId),
        {
          $project: {
            "acl.*": 0,
            [`acl.friendsOf_${userId}`]: 0
          }
        }
      ]
    )).pipe(
      map(res => {
        let response;
        if (Array.isArray(res)) {
          response = res.length > 0 ? res[0] : null;
        } else {
          response = res;
        }
        return response;
      }),
      map(res => {
        if (!res) {
          throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }
        const isOwner = res.acl[userId].create === true;
        const isPending = res.status === 'pending';
        if (!isOwner && isPending) {
          throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }
        delete res.acl;
        return res;
      })
    );
  }

  getProducts(
    param: ProductQueryFilter,
    userId?: string
  ): Observable<ProductResponse> {
    const { limit, page, skip } = param;
    return from(this.getAll(limit, page, skip, userId)).pipe(
      map(res => {
        let response;
        if (Array.isArray(res)) {
          response = res.length > 0 ? res[0] : { page: 0, total: 0, products: [] };
        } else {
          response = res;
        }
        return response;
      })
    );
  }

  deleteProduct(userId: string, id: string) {
    return of({userId, id}).pipe(
      exhaustMap(params => {
        return from(this.productModel.findOne({
          removed: false,
          _id: params.id
        })).pipe(
          switchMap(model => {
            if (!model) return throwError(new HttpException('Product not found', HttpStatus.NOT_FOUND));
            const isOwner = model.acl[params.userId] && model.acl[params.userId].delete === true;
            model.removed = true;
            model.updated = new Date();
            const remove = from(model.save()).pipe(
              pluck('_id')
            );
            return isOwner ? remove : throwError(new HttpException('Cannot delete this product', HttpStatus.BAD_REQUEST));
          })
        );
      })
    )
  }

  async getAll(limit: number, page: number, skip: number, userId?: string): Promise<ProductResponse> {
    const aggregationPipeline: any[] = [
      {
        $match: {
          removed: false,
          $or: [
            {
              'acl.*.read': true

            },
            {
              [`acl.${userId}.read`]: true

            },
            {
              [`acl.friendsOf_${userId}.read`]: true
            }
          ]
        }
      },
      ProductService.getCategoryStage(),
      ...ProductService.getCurrencyStage(),
      ...ProductService.getRatingStage(userId),
      {
        $sort: {
          created: 1
        }
      },
      {
        $group: {
          _id: null,
          products: { $push: '$$ROOT' }
        }
      },
      {
        $project: {
          _id: 0,
          total: {
            $cond: {
              if: { $isArray: '$products' },
              then: { $size: '$products' },
              else: 0
            }
          },
          products: 1,
          page: {
            $literal: page ? page : 1
          }
        }
      }
    ];
    return await this.productModel.aggregate(aggregationPipeline).exec();
  }

  rateProduct(userId: any, id: any, dto: RateProductDto) {

    const actions = {
      create: (user, productId, score): Promise<any> => {
        return this.ratingModel.create({
          user,
          className: 'Product',
          score,
          entityId: productId
        });
      },
      update: (model: Rating, score) => {
        model.score = score;
        return model.save();
      },
      find: (user, productId): Promise<Rating> => {
        return this.ratingModel.findOne({
          user,
          entityId: productId,
          className: 'Product'
        }).exec();
      }
    };


    return from(actions.find(userId, id)).pipe(
      switchMap(rating => {
        if (rating) {
          return from(actions.update(rating, dto.rating));
        } else {
          throw new Error('Rating not found');
        }
      }),
      catchError(err => {
        if (err.message === 'Rating not found') {
          return from(actions.create(userId, id, dto.rating));
        } else {
          throwError(err);
        }
      })
    );
  }

  private static getCategoryStage() {
    return {
      $lookup: {
        from: 'categories',
        as: 'category',
        pipeline: [
          {
            $project: {
              title: 1,
              _id: 0
            }
          }
        ]
      }
    };
  }

  private static getCurrencyStage() {
    return [
      {
        $lookup: {
          from: 'currencies',
          as: 'currency',
          pipeline: [
            {
              $project: {
                iso: 1,
                _id: 0
              }
            }
          ]
        }
      },
      {
        $addFields: {
          price: {
            value: '$price',
            currency: { $arrayElemAt: ['$currency', 0] }
          }
        }
      },
      {
        $set: {
          price: {
            value: '$price.value',
            currency: '$price.currency.iso'
          }
        }
      }
    ];
  }

  private static getRatingStage(userId) {
    return [
      {
        $lookup: {
          from: 'ratings',
          let: { 'id': '$_id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { 'className': 'Product' },
                    { 'entityId': '$$id' }
                  ]
                }
              }
            },
            {
              $project: {
                _id: 0,
                totalScore: {
                  $sum: '$score'
                },
                userScore: {
                  $cond: {
                    if: {
                      $eq: ['$user', userId]
                    },
                    then: '$score',
                    else: 0
                  }
                }
              }
            }
          ],
          as: 'computedRating'
        }
      },
      {
        $set: {
          rating: {
            totalRating: {
              $size: '$computedRating'
            },
            totalScore: {
              $floor: {
                $avg: '$computedRating.totalScore'
              }
            },
            userScore: {
              $ceil: {
                $sum: '$computedRating.userScore'
              }
            }
          }
        }
      },
      {
        $project: {
          __v: 0,
          computedRating: 0,
          currency: 0
        }
      }
    ]
  }
}
