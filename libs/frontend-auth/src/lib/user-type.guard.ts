import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route, Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { from, Observable, of } from 'rxjs';
import * as Parse from 'parse';
import { AUTH_CONFIG_TOKEN, AuthConfig } from './auth.config';
import { mapTo, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class UserTypeGuard implements CanActivate, CanLoad {

  constructor(@Inject(AUTH_CONFIG_TOKEN) private config: AuthConfig, private router: Router) {
  }

  get inRole(): Observable<boolean> {
    return new Observable((observer) => {
      const currentUser = Parse.User.current();

      if (!currentUser) {
        observer.error(new Error('User not authenticated'));
        return;
      }
      const roleName = this.config.appType === 'storefront' ? 'user' : this.config.appType;
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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.inRole.pipe(
      switchMap((inRole: boolean) => {
        return inRole ? of(true) : from(this.router.navigate(['/auth', '403'])).pipe(mapTo(false))
      })
    );
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.inRole.pipe(
      switchMap((inRole: boolean) => {
        return inRole ? of(true) : from(this.router.navigate(['/auth', '403'])).pipe(mapTo(false))
      })
    );
  }
}
