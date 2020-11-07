import { IUser } from './iuser';
import { Inject } from '@angular/core';
import { AUTH_SERVICE_TOKEN, AuthService } from '../auth.service';
import { Observable } from 'rxjs';

export abstract class User implements IUser {
  abstract email: string;
  abstract firstName: string;
  abstract lastName: string;
  abstract otherName: string;
  abstract phoneNumber: string;

  constructor(@Inject(AUTH_SERVICE_TOKEN) private service: AuthService) {}

  isLoggedIn(): Observable<boolean> {
    return this.service.isLoggedIn()
  }


  logOut(): Observable<any> {
    return this.service.logout();
  }
}
