import * as Parse from 'parse';
import { ProductServiceInterface } from './product.service';
import { Product } from '@tcode/api-interface';
import { from, Observable } from 'rxjs';
import { map, mergeAll, toArray } from 'rxjs/operators';

const PRODUCT = 'Product';

export class ParseProductService implements ProductServiceInterface {
  private static parseProduct(obj: Parse.Object) {
    return {
      ...obj.toJSON()
    } as unknown;
  }

  getProduct(id: string): Observable<Product> {
    const query = new Parse.Query(PRODUCT);
    return from(query.get(id)).pipe(
      map(obj => ParseProductService.parseProduct(obj) as Product)
    );
  }

  getProducts(skip: number = 0, limit: number = 30): Observable<Product[]> {
    const query = new Parse.Query(PRODUCT);
    query.limit(limit).skip(skip);
    return from(query.find()).pipe(
      mergeAll(),
      map((obj: Parse.Object) => {
        const product = ParseProductService.parseProduct(obj);
        return product as Product;
      }),
      toArray()
    );
  }

  updateProduct(id: string, product: Partial<Product>): Observable<any> {
    const _product = new Parse.Object(PRODUCT);
    _product.id = id;
    Object.keys(product).forEach(key => {
      _product.set(key, product[key]);
    });
    return from(_product.save());
  }

  deleteProduct(id: string): Observable<any> {
    const _product = new Parse.Object(PRODUCT);
    _product.id = id;
    return from(_product.destroy());
  }
}
