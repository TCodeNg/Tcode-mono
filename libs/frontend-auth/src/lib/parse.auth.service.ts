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

  userHasRole(roleName: string): Observable<boolean> {
    return new Observable((observer) => {
      const currentUser: Parse.User = this.currentUser;

      if (!currentUser) {
        observer.error(new Error('User not authenticated'));
        return;
      }
      const roleQuery = new Parse.Query(Parse.Role);
      roleQuery.equalTo('name', roleName);
      roleQuery.find().then((roles) => {
        const promises = roles.map(role => role.getUsers().query().find());
        return Promise.all(promises);
      }).then((_users) => {
        const users: string[] = [].concat(..._users).filter((user: Parse.User) => user.id === currentUser.id);
        observer.next(users.length === 1);
      })
        .catch(err => observer.error(err))
        .finally(() => observer.complete());
    });
  }
}
