import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { Filter } from '@tcode/api-interface';
import { Order } from './order';

export interface OrderServiceInterface {
  getOrders(skip?: number, limit?: number, filters?: Filter): Observable<Order[]>;
  getOrder(orderId: string): Observable<any>;
  createOrder(payload: any): Observable<string>;
  watchOrder(orderId: string): Observable<Order>;
}

export type OrderService = OrderServiceInterface;

export const ORDER_SERVICE_TOKEN = new InjectionToken<OrderService>('ORDER_SERVICE_TOKEN');
