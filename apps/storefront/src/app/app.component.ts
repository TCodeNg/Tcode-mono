import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, User } from '@tcode/frontend-auth';
import { Product } from '@tcode/api-interface';
import { Observable } from 'rxjs';
import { Cart, CART_SERVICE_TOKEN, CartService } from '@tcode/cart';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tcode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: Customer;
  showCart = false;
  cartItems: any;
  cart$: Observable<Cart> = this.cartService.getCart();
  cartCount$ = this.cart$.pipe(map(cart => cart.itemCount));
  cartAmount$ = this.cart$.pipe(map(cart => cart.totalAmount));
  cartItems$: Observable<any> = this.cart$.pipe(map(cart => cart.products));

  constructor(
    _user: User,
    private router: Router,
    @Inject(CART_SERVICE_TOKEN)private cartService: CartService
  ) {
    this.user = _user as Customer;
  }

  get isLoggedIn(): Observable<boolean> {
    return this.user.isLoggedIn();
  }

  ngOnInit() {}

  async handleAuthAction() {
    await this.router.navigate(['/auth/login']);
  }

  async gotoProductPage(product: Product) {
    const urlPath = product.type === 'estate' ? 'real-estate' : product.type === 'inverter' ? 'inverters' : 'farm-produce';
    await this.router.navigate([`/${urlPath}`, 'product', product.objectId]);
  }

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item.objectId).subscribe();
  }

  async navigateToCheckout() {
    this.showCart = false;
    await this.router.navigate(['/checkout']);
  }

  async logOut() {
    await this.user.logOut();
    await this.router.navigate(['/']);
  }

}
