import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import * as Parse from 'parse';

@Injectable()
export class ImageInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = Parse.User.current();
    const token = user?.getSessionToken() ?? '';
    const req = request.clone({
      setHeaders: {
        authorization: `Bearer ${token}`
      }
    });
    return next.handle(req);
  }
}
