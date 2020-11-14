import { OrderServiceInterface } from './order.service';
import { from, Observable, Subject } from 'rxjs';
import * as Parse from 'parse';
import { map } from 'rxjs/operators';
import { Order } from './order';

export class ParseOrderService implements OrderServiceInterface {
  createOrder(payload: any): Observable<string> {
    const order = new Parse.Object('Order');
    order.set('shippingMethod', payload.shippingMethod);
    order.set('paymentMethod', payload.paymentMethod);
    return from(order.save()).pipe(
      map(order => order.id)
    );
  }

  getOrder(orderId: string): Observable<Order> {
    const query = new Parse.Query('Order');
    return from(query.get(orderId)).pipe(
      map(order => Order.generate(order.toJSON() as any))
    );
  }

  getOrders(skip = 0, limit = 30, filters = {}): Observable<Order[]> {
    const query = new Parse.Query('Order');
    query.skip(skip).limit(limit);
    Object.keys(filters).forEach(key => query.equalTo(key, filters[key]));
    query.include('user');
    return from(query.find()).pipe(
      map(orders => orders.map(order => Order.generate(order.toJSON() as any)))
    );
  }

  watchOrder(orderId: string): Observable<Order> {
    const subject = new Subject<Order>();
    const query = new Parse.Query('Order');
    query.equalTo('objectId', orderId);
    query.subscribe().then(sub => {
      sub.on('update', (order) => {
        subject.next(Order.generate(order.toJSON() as any));
      });
      sub.on('close', () => subject.complete());
    }).catch(err => subject.error(err));
    query.first().then(order => subject.next(Order.generate(order.toJSON() as any))).catch(err => subject.error(err));
    return subject.asObservable();
  }

}
