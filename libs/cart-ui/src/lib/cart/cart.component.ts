import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, CART_SERVICE_TOKEN, CartService } from '@tcode/cart';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'tcode-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  isComponentAlive: boolean;
  cart$: Observable<Cart> = this.cartService.getCart();
  cartCount = 0;
  cartItems: any;
  cartAmount = 0;
  constructor(
    private router: Router,
    @Inject(CART_SERVICE_TOKEN) private cartService: CartService
  ) {
    this.isComponentAlive = true;
  }

  ngOnInit(): void {
    this.cart$.pipe(
      takeWhile(() => this.isComponentAlive)
    ).subscribe((cart: Cart) => {
      this.cartCount = cart.itemCount;
      this.cartItems = Object.values(cart.products);
      this.cartAmount = cart.totalAmount;
    })
  }

  async navigateToCheckout() {
    // this.showCart = false;
    await this.router.navigate(['/checkout']);
  }

}
