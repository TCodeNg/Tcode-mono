import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Product } from '@tcode/api-interface';

@Component({
  selector: 'tcode-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Product;
  constructor() { }

  ngOnInit(): void {
    console.log('item',this.cartItem);
  }

}
