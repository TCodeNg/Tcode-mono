import * as Parse from 'parse';
import { AuthServiceInterface } from './auth.service';
import { from, Observable, of } from 'rxjs';

export class ParseAuthService implements AuthServiceInterface {
  isLoggedIn(): Observable<boolean> {
    return of(!!Parse.User.current());
  }

  login(email: string, password: string): Observable<any> {
    return from(Parse.User.logIn(email, password));
  }

  logout(): Observable<any> {
    return from(Parse.User.logOut());
  }

  get currentUser(): any {
    return Parse.User.current();
  }

  signUp(payload: { lastName: string; firstName: string; password: string; phoneNumber: string; address: string; email: string; username: string }): Observable<any> {
    const user = new Parse.User();
    user.setUsername(payload.username);
    user.setPassword(payload.password);
    user.setEmail(payload.email);
    user.set('address', payload.address);
    user.set('firstName', payload.firstName);
    user.set('lastName', payload.lastName);
    return from(user.signUp());
  }
}
