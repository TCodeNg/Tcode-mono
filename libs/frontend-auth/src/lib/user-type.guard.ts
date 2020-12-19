import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { AUTH_CONFIG_TOKEN, AuthConfig } from './auth.config';
import { mapTo, switchMap } from 'rxjs/operators';
import { AUTH_SERVICE_TOKEN, AuthService } from './auth.service';

@Injectable()
export class UserTypeGuard implements CanActivate, CanLoad {

  roleName: string;

  constructor(
    @Inject(AUTH_CONFIG_TOKEN) private config: AuthConfig,
    private router: Router,
    @Inject(AUTH_SERVICE_TOKEN) private authService: AuthService
  ) {
    this.roleName = this.config.appType === 'storefront' ? 'user' : this.config.appType;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.userHasRole(this.roleName).pipe(
      switchMap((inRole: boolean) => {
        return inRole ? of(true) : from(this.router.navigate(['/auth', '403'])).pipe(mapTo(false));
      })
    );
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.userHasRole(this.roleName).pipe(
      switchMap((inRole: boolean) => {
        return inRole ? of(true) : from(this.router.navigate(['/auth', '403'])).pipe(mapTo(false));
      })
    );
  }
}
