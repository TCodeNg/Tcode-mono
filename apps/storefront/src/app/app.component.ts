import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, User } from '@tcode/frontend-auth';
import { Product } from '@tcode/api-interface';
import { Observable } from 'rxjs';
import { Cart, CART_SERVICE_TOKEN, CartService } from '@tcode/cart';
import { map, startWith, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'tcode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  user: Customer;
  showCart = false;
  cartItems: any;
  isComponentAlive: boolean;
  cart$: Observable<Cart> = this.cartService.getCart().pipe(tap(console.log));
  cartCount$ = this.cart$.pipe(map(cart => cart.itemCount), startWith(0));
  cartAmount$ = this.cart$.pipe(map(cart => cart.totalAmount), startWith(0));
  cartItems$: Observable<any> = this.cart$.pipe(map(cart => Object.values(cart.products)), startWith([]));
  cartCount = 0;
  cartAmount = 0;
  constructor(
    _user: User,
    private router: Router,
    @Inject(CART_SERVICE_TOKEN) private cartService: CartService
  ) {
    this.user = _user as Customer;
    this.isComponentAlive = true;
  }

  get isLoggedIn(): Observable<boolean> {
    return this.user.isLoggedIn();
  }

  ngOnInit() {
    this.cart$.pipe(
      takeWhile(() => this.isComponentAlive)
    ).subscribe((cart: Cart) => {
      console.log(cart)
      this.cartCount = cart.itemCount;
      this.cartItems = Object.values(cart.products);
      this.cartAmount = cart.totalAmount;
    })
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }

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
