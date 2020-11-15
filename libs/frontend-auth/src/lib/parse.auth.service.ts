import * as Parse from 'parse';
import { AuthServiceInterface } from './auth.service';
import { from, Observable, of } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { WINDOW_TOKEN } from './window-token';

@Injectable()
export class ParseAuthService implements AuthServiceInterface {
  constructor(@Inject(WINDOW_TOKEN) private window: Window) {
  }
  isLoggedIn(): Observable<boolean> {
    return of(!!Parse.User.current());
  }

  login(email: string, password: string, returnUrl?: string): Observable<any> {
    return from(Parse.User.logIn(email, password).then(
      () => {
        this.window.location.href = returnUrl ?? '/';
      }
    ));
  }

  logout(): Observable<any> {
    return from(Parse.User.logOut().then(() => {
        this.window.localStorage.removeItem('@@STATE');
        this.window.location.href = '/';
        this.window.location.reload();
    }));
  }

  get currentUser(): any {
    return Parse.User.current();
  }

  signUp(payload: { lastName: string; firstName: string; password: string; phoneNumber: string; address: string; email: string; username: string }, returnUrl?: string): Observable<any> {
    const user = new Parse.User();
    user.setUsername(payload.username);
    user.setPassword(payload.password);
    user.setEmail(payload.email);
    user.set('address', payload.address);
    user.set('firstName', payload.firstName);
    user.set('lastName', payload.lastName);
    return from(user.signUp().then(
      () => {
        this.window.location.href = returnUrl ?? '/';
      }
    ));
  }
}
