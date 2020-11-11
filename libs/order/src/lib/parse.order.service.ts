import { OrderServiceInterface } from './order.service';
import { from, Observable, Subject } from 'rxjs';
import * as Parse from 'parse';
import { map } from 'rxjs/operators';

export class ParseOrderService implements OrderServiceInterface {
  createOrder(payload: any): Observable<string> {
    const order = new Parse.Object('Order');
    return from(order.save()).pipe(
      map(order => order.id)
    );
  }

  getOrder(orderId: string): Observable<any> {
    const query = new Parse.Query('Order');
    return from(query.get(orderId)).pipe(
      map(order => order.toJSON())
    );
  }

  getOrders(skip = 0, limit = 30): Observable<any[]> {
    const query = new Parse.Query('Order');
    query.skip(skip).limit(limit);
    return from(query.find());
  }

  watchOrder(orderId: string): Observable<any> {
    const subject = new Subject();
    const query = new Parse.Query('Order');
    query.equalTo('objectId', orderId);
    query.subscribe().then(sub => {
      sub.on('update', (order) => {
        subject.next(order.toJSON());
      })
    }).catch(err => subject.error(err));
    return subject.asObservable();
  }

}
