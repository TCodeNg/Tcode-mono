import { Component, OnInit, ChangeDetectionStrategy, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@tcode/api-interface';
import { CartService, CART_SERVICE_TOKEN } from '@tcode/cart'
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

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item.objectId).subscribe();
  }

  async gotoProductPage(product: Product) {
    const urlPath = product.type === 'estate' ? 'real-estate' : product.type === 'inverter' ? 'inverters' : 'farm-produce';
    await this.router.navigate([`/${urlPath}`, 'product', product.objectId]);
  }

}
