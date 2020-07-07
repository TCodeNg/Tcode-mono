import { Component, OnInit } from '@angular/core';
import { Customer, User } from '@tcode/frontend-auth';

@Component({
  selector: 'tcode-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  user: Customer;
  constructor(_user: User) {
    this.user = _user as Customer;
  }

  ngOnInit(): void {
    console.log(this.user);
  }

}
