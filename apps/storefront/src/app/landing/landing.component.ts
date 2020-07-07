import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, User } from '@tcode/frontend-auth';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'tcode-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  user: Customer;
  constructor(
    _user: User,
    private router: Router
  ) {
    this.user = _user as Customer;
  }

  ngOnInit(): void {
  }

  handleAuthAction(){
    this.router.navigate(['/auth/login']);
  }

  get isLoggedIn(): boolean {
    return this.user.isLoggedIn()
  }

}
