import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

export interface OrderServiceInterface {
  getOrders(skip: number, limit?: number): Observable<any[]>;
  getOrder(orderId: string): Observable<any>;
  createOrder(payload: any): Observable<string>;
  watchOrder(orderId: string): Observable<any>;
}

export type OrderService = OrderServiceInterface;

export const ORDER_SERVICE_TOKEN = new InjectionToken<OrderService>('ORDER_SERVICE_TOKEN');
