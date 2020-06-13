import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDoc, ProductDto, ProductQueryFilter, ProductResponse } from '@tcode/api-interface';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { ACLUtils } from '@tcode/acl-util';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<ProductDoc>) {}

  getProducts(
    param: ProductQueryFilter,
    userId?: string
  ): Observable<ProductResponse> {
    const { limit, page, skip } = param;
    return from(this.getAll(limit, page, skip, userId)).pipe(
      map(res => {
        let response;
        if(Array.isArray(res)) {
          response = res.length > 0 ? res[0] : {page: 0, total: 0, products: []}
        } else {
          response = res;
        }
        delete response._id;
        return response;
      })
    );
  }

  async createProduct(dto: ProductDto, userId: string) {
    const acl = ACLUtils.generate(dto.acl, userId, true)
    return await this.productModel.create({...dto, acl, status: 'pending'} as any);
  }

  async getAll(limit: number, page: number, skip: number, userId?: string): Promise<ProductResponse> {
    const aggregationPipeline: any[] = [
      {
        $match: {
          $or: [
            {
              "acl.*.read": true

            },
            {
              [`acl.${userId}.read`]: true

            },
            {
              [`acl.friendsOf_${userId}.read`]: true
            }
          ]
        },
      },
      {
        $lookup: {
          from: 'currencies',
          as: 'currency',
          pipeline: [
            {
              $project: {
                iso: 1,
                _id: 0,
              }
            }
          ]
        }
      },
      {
        $lookup: {
          from: 'ratings',
          pipeline: [
            {
              $project: {
                _id: 0,
                totalRating: {
                  $sum: 1
                },
                score: {
                  $sum: "$score"
                },
                userScore: {
                  $cond: {
                    if: {
                      $eq: ["$user", userId]
                    },
                    then: "$score",
                    else: 0
                  }
                }
              }
            }
          ],
          as: 'rating'
        }
      },
      {
        $unwind: {
          path: "$currency"
        }
      },
      {
        $unwind: {
          path: "$rating"
        }
      },
      {
        $project: {
          __v: 0
        }
      },
      {
        $sort: {
          created: 1
        }
      },
      {
        $group: {
          _id: 0,
          total: {$sum: 1},
          products: { $push: '$$ROOT' }
        }
      }
    ];
    return await this.productModel.aggregate(aggregationPipeline).exec();
  }
}
