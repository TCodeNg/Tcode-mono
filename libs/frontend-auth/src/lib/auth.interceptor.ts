import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthState } from './+state/auth.state';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  accessToken: string;
  refreshToken: string;

  constructor(auth: AuthState, private authService: AuthService) {
    const { snapshot } = auth;
    this.accessToken = snapshot.accessToken;
    this.refreshToken = snapshot.refreshToken;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = request.clone();
    let res: Observable<HttpEvent<any>>;

    if (clone.url.includes('auth')) {
      res = next.handle(request);
    } else if (this.accessToken) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization',
          'Bearer ' + this.accessToken)
      });
      res = next.handle(cloned);
    }

    return res.pipe(
      switchMap(event => {
        if (event instanceof HttpResponse) {
          console.log(event);
        }
        return of(event);
      })
    );
  }
}
