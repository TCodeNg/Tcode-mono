import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import * as Parse from 'parse';

export interface AuthServiceInterface {
  currentUser?: Parse.User;
  login(email: string, password: string): Observable<any>;
  isLoggedIn(): Observable<boolean>;
  logout(): Observable<any>;
  signUp(payload: { lastName: string; firstName: string; password: string; phoneNumber: string; address: string; email: string; username: string }): Observable<any>;
}

export type AuthService = AuthServiceInterface;

export const AUTH_SERVICE_TOKEN = new InjectionToken<AuthService>('AUTH_SERVICE_TOKEN');

