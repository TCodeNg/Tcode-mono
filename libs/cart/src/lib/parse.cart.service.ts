import { CartServiceInterface } from './cart.service';
import { from, Observable, Subject } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import * as Parse from 'parse';
import { Cart, ParseCart } from '@tcode/cart';

export class ParseCartService implements CartServiceInterface {
  addToCart(productId: string, userId?: string): Observable<void> {
    return from(Parse.Cloud.run('addProductToCart', { productId, userId }));
  }

  clearCart(userId?: string): Observable<Cart> {
    return from(Parse.Cloud.run('clearCart', { userId })).pipe(
      exhaustMap(_ => this.getCart())
    );
  }

  getCart(userId?: string): Observable<Cart> {
    const subject = new Subject<Cart>();
    const query = new Parse.Query('Cart');
    const id = userId ?? Parse.User.current()?.id;
    query.equalTo('user', id);
    query.subscribe().then(sub => {
      sub.on('update', (cart: ParseCart) => subject.next(cart));
      sub.on('close', () => subject.complete());
    }).catch(err => subject.error(err));

    return subject.asObservable();
  }

  removeFromCart(productId: string, userId?: string): Observable<void> {
    return from(Parse.Cloud.run('removeProductFromCart', { productId, userId }));
  }

  checkout(userId?: string): Observable<void> {
    return from(Parse.Cloud.run('checkout', { userId }));
  }
}
