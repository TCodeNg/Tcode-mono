import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '@tcode/api-interface';
@Component({
  selector: 'tcode-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() cartItem?: any;
  @Output() goToProduct = new EventEmitter<string>();
  @Output() removeFromCart = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  doRemoveFromCart(item: Product) {
    this.removeFromCart.emit(item);
  }

  gotoProductPage(product: Product) {
    const urlPath = product.type === 'estate' ? 'real-estate' : product.type === 'inverter' ? 'inverters' : 'farm-produce';
    this.goToProduct.emit(`/${urlPath}/product/${product.objectId}`);
  }

}
