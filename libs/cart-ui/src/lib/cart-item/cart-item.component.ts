import { Component, OnInit, ChangeDetectionStrategy, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@tcode/api-interface';
import { Cart, CartService, CART_SERVICE_TOKEN } from '@tcode/cart'
@Component({
  selector: 'tcode-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any;
  constructor(
    private router: Router,
    @Inject(CART_SERVICE_TOKEN) private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  removeFromCart(cartItem: any) {
    const quantity = cartItem.quantity;
    if(quantity === 1){
      this.cartService.removeFromCart(cartItem.item.objectId, true).subscribe();
    } else {
      this.cartService.removeFromCart(cartItem.item.objectId).subscribe();
    }
  }

  addTocart(product: Product){
    const { objectId: productId } = product;
    this.cartService.addToCart(productId).subscribe();
  }

  async gotoProductPage(product: Product) {
    const urlPath = product.type === 'estate' ? 'real-estate' : product.type === 'inverter' ? 'inverters' : 'farm-produce';
    await this.router.navigate([`/${urlPath}`, 'product', product.objectId]);
  }

}
