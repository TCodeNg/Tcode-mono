import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { Cart } from './cart';

export interface CartServiceInterface {
  getCart(userId?: string): Observable<Cart>;
  addToCart(productId: string, userId?: string): Observable<void>;
  removeFromCart(productId: string, deleteItem?: boolean, userId?: string): Observable<void>;
  checkout(userId?: string): Observable<void>;
  clearCart(): Observable<Cart>;
}
export type CartService = CartServiceInterface;
export const CART_SERVICE_TOKEN = new InjectionToken<CartService>('CART_SERVICE_TOKEN');
