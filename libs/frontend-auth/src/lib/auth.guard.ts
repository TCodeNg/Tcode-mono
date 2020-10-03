import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { AuthState } from './+state/auth.state';
import { mapTo } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private state: AuthState, private router: Router, private authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const { snapshot } = this.state;
    const hasToken = !!snapshot.accessToken;
    const currentUser = localStorage.getItem('__currentUser');
    if(currentUser) {
      this.router.navigate(['/'])
      return false;
    }
    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const { snapshot } = this.state;
    const hasToken = !!snapshot.accessToken;
    return this.checkToken(hasToken);
  }

  private checkToken(hasToken: boolean) {
    if (hasToken) {
      return true;
    } else {
      return from(this.router.navigate(['auth', 'login'])).pipe(
        mapTo(false)
      );
    }
  }
}
