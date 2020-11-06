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
}
