import { OrderServiceInterface } from './order.service';
import { from, Observable } from 'rxjs';
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
    return from(query.get(orderId));
  }

  getOrders(skip = 0, limit = 30): Observable<any[]> {
    const query = new Parse.Query('Order');
    query.skip(skip).limit(limit);
    return from(query.find());
  }

}
