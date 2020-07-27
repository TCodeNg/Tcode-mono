import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Customer } from '@tcode/frontend-auth';
import { CartService } from './services/cart.service';

@Component({
  selector: 'tcode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user: Customer;
  showCart = false;
  cartItems: any;
  constructor(
    _user: User,
    private router: Router,
    private cartService: CartService
  ){
    this.user = _user as Customer;
  }

  cartCount$ = this.cartService.cartCount$

  ngOnInit(){
    this.cartService.updateCartItemCount();
    this.cartItems = this.cartService.getItemsInCart();
    console.log(this.cartItems)
  }

  handleAuthAction(){
    this.router.navigate(['/auth/login']);
  }

  get isLoggedIn(): boolean {
    return this.user.isLoggedIn()
  }
  
}
