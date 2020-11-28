import { Component, OnInit, ChangeDetectionStrategy, Inject, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, CART_SERVICE_TOKEN, CartService } from '@tcode/cart';
import { Observable } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
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
  // tslint:disable-next-line: no-output-on-prefix
  @Output() closeCart = new EventEmitter();
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
    this.handleCloseCart();
    await this.router.navigate(['/checkout']);
  }

  handleCloseCart(){
    this.closeCart.emit();
  }

}
