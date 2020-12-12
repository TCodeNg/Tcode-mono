import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Admin, User } from '@tcode/frontend-auth';
import { Subject } from 'rxjs';

@Component({
  selector: 'tcode-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['drawer-menu.component.scss']
})
export class DrawerMenuComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  user: Admin;
  constructor(
    _user: User,
    private router: Router,
  ){
    this.user = _user as Admin;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async logout(){
    await this.user.logOut();
    await this.router.navigate(['/auth/login']);
  }
}