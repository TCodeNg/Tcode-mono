import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Cart, CART_SERVICE_TOKEN, CartService } from '@tcode/cart';
import { Observable } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
@Component({
  selector: 'tcode-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  isComponentAlive: boolean;
  cart$: Observable<Cart> = this.cartService.getCart();
  cartCount = 0;
  cartItems: any;
  cartAmount = 0;
  constructor(
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
      console.log(this.cartItems)
      // this.cartAmount = cart.totalAmount;
    })
  }

}
