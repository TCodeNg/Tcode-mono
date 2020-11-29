import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, CART_SERVICE_TOKEN, CartService } from '@tcode/cart';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Product } from '@tcode/api-interface';

@Component({
  selector: 'tcode-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Output() closeCart = new EventEmitter<any>();
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
    this.close();
    await this.router.navigate(['/checkout']);
  }

  async removeItem(product: Product) {
    await this.cartService.removeFromCart(product.objectId, undefined, true).toPromise();
  }

  async goToProduct(url: string) {
    const tree = this.router.parseUrl(url);
    await this.router.navigateByUrl(tree);
  }

  close() {
    this.closeCart.emit();
  }
}
