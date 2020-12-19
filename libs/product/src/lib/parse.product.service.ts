import * as Parse from 'parse';
import { ProductServiceInterface } from './product.service';
import { Product } from '@tcode/api-interface';
import { from, Observable } from 'rxjs';
import { map, mergeAll, toArray } from 'rxjs/operators';

export class ParseProductService implements ProductServiceInterface {
  private static parseProduct(obj: Parse.Object) {
    return {
      ...obj.toJSON()
    } as unknown;
  }

  getProduct(id: string): Observable<Product> {
    const query = new Parse.Query('Product');
    return from(query.get(id)).pipe(
      map(obj => ParseProductService.parseProduct(obj) as Product)
    );
  }

  getProducts(skip: number = 0, limit: number = 30, productType?: 'farm' | 'estate' | 'inverter', ...args: string[]): Observable<Product[]> {
    const query = new Parse.Query('Product');
    const categories = args ?? [];
    query.limit(limit).skip(skip);
    if (!!productType) {
      query.equalTo('type', productType);
    }
    if (categories.length > 0) {
      query.containedIn('category', categories);
    }
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
    const _product = new Parse.Object('Product');
    _product.id = id;
    Object.keys(product).forEach(key => {
      _product.set(key, product[key]);
    });
    return from(_product.save());
  }

  deleteProduct(id: string): Observable<any> {
    const _product = new Parse.Object('Product');
    _product.id = id;
    return from(_product.destroy());
  }

  createProduct(product: Partial<Product>): Observable<Product> {
    const _product = new Parse.Object('Product');
    Object.keys(product).forEach(key => {
      _product.set(key, product[key]);
    });
    return from(_product.save()).pipe(
      map((obj: Parse.Object) => {
        const product = ParseProductService.parseProduct(obj);
        return product as Product;
      }),
    );
  }
}
