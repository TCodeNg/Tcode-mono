import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, User } from '@tcode/frontend-auth';
import { Router } from '@angular/router';
import { Product } from '@tcode/api-interface';
import { products } from './products';

@Component({
  selector: 'tcode-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  user: Customer;
  products: Product[];
  constructor(
    _user: User,
    private router: Router
  ) {
    this.user = _user as Customer;
  }

  ngOnInit(): void {
    this.products = products;
  }

  handleAuthAction(){
    this.router.navigate(['/auth/login']);
  }

  get isLoggedIn(): boolean {
    return this.user.isLoggedIn()
  }

}
