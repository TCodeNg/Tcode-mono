import { InjectionToken } from '@angular/core';
import { Product } from '@tcode/api-interface';
import { Observable } from 'rxjs';

/*
*   Usage:
*   1. Import the Product module
*   2. Inject the PRODUCT_SERVICE_TOKEN
*     e.g
*     constructor(@Inject(PRODUCT_SERVICE_TOKEN) private service: ProductService) {}
*/

export interface ProductServiceInterface {
  getProducts(skip?: number, limit?: number, productType?: 'farm' | 'estate' | 'inverter', ...args: string[]): Observable<Product[]>;
  getProduct(id: string): Observable<Product>;
  updateProduct(id: string, product: Partial<Product>): Observable<any>;
  deleteProduct(id: string): Observable<any>;
  createProduct(product: Partial<Product>): Observable<Product>;
}
export type ProductService = ProductServiceInterface;
export const PRODUCT_SERVICE_TOKEN = new InjectionToken('PRODUCT_SERVICE_TOKEN');
