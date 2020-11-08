import { CartServiceInterface } from './cart.service';
import { from, Observable, Subject } from 'rxjs';
import { exhaustMap, filter } from 'rxjs/operators';
import * as Parse from 'parse';
import { Cart, ParseCart } from '@tcode/cart';
import { Inject, Injectable } from '@angular/core';
import { STORAGE_TOKEN } from '@tcode/shared/assets';

@Injectable()
export class ParseCartService implements CartServiceInterface {
  constructor(@Inject(STORAGE_TOKEN) private storage: Storage) {}

  addToCart(productId: string, userId?: string): Observable<void> {
    return from(Parse.Cloud.run('addToCart', { productId, userId: userId ?? this.userId }));
  }

  clearCart(userId?: string): Observable<Cart> {
    return from(Parse.Cloud.run('clearCart', { userId: userId ?? this.userId })).pipe(
      exhaustMap(_ => this.getCart())
    );
  }

  getCart(userId?: string): Observable<Cart> {
    const subject = new Subject<Cart>();
    const query = new Parse.Query('Cart');
    const id = userId ?? this.userId;
    query.equalTo('userId', id);
    query.subscribe().then(sub => {
      sub.on('update', (cart: ParseCart) => subject.next(cart));
      sub.on('close', () => subject.complete());
    }).catch(err => subject.error(err));
    query.first().then((cart: ParseCart) => subject.next(cart)).catch(e => subject.error(e));
    return subject.asObservable().pipe(
      filter(cart => !!cart)
    );
  }

  removeFromCart(productId: string, userId?: string): Observable<void> {
    return from(Parse.Cloud.run('removeFromCart', { productId, userId: userId ?? this.userId }));
  }

  checkout(userId?: string): Observable<void> {
    return from(Parse.Cloud.run('checkout', { userId: userId ?? this.userId }));
  }

  private get userId(): string {
    const _userId = Parse.User.current()?.id;
    return _userId ?? this.storage.getItem('Parse/myAppId/installationId');
  }
}
