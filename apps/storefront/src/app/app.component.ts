import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Customer } from '@tcode/frontend-auth';
import { CartService } from './services/cart.service';
import { Product } from '@tcode/api-interface';
import { Observable } from 'rxjs';

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
  cartAmount$ = this.cartService.cartTotalAmount$;
  cartItems$ = this.cartService.cartItems$;

  ngOnInit(){
    this.cartService.updateCartItemCount();
    this.cartService.updateCartTotalAmount();
    this.cartService.updateCartItems();
  }

  handleAuthAction(){
    this.router.navigate(['/auth/login']);
  }

  get isLoggedIn(): Observable<boolean> {
    return this.user.isLoggedIn()
  }

  gotoProductPage(product: Product){
    const urlPath = product.type === 'estate' ? 'real-estate' : product.type === 'inverter' ? 'inverters' : 'farm-produce';
    this.router.navigate([`/${urlPath}`, 'product', product.id]);
  }

  removeFromCart(item: Product){
    this.cartService.removeItem(item)
  }

}
