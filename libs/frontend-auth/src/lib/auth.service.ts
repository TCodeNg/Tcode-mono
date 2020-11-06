import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface AuthServiceInterface {
  login(email: string, password: string): Observable<any>;
  isLoggedIn(): Observable<boolean>;
  logout(): Observable<any>;
}

export type AuthService = AuthServiceInterface;

export const AUTH_SERVICE_TOKEN = new InjectionToken<AuthService>('AUTH_SERVICE_TOKEN');

