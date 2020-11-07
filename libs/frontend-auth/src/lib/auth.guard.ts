import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { mapTo, switchMap } from 'rxjs/operators';
import { AUTH_SERVICE_TOKEN, AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(@Inject(AUTH_SERVICE_TOKEN) private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn().pipe(
      switchMap(loggedIn => this.checkLogin(loggedIn))
    );
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn().pipe(
      switchMap(loggedIn => this.checkLogin(loggedIn))
    );
  }

  private checkLogin(isLoggedIn: boolean): Observable<boolean> {
    if (isLoggedIn) {
      return of(true);
    } else {
      return from(this.router.navigate(['auth', 'login'])).pipe(
        mapTo(false)
      );
    }
  }
}
