import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartComponent, CartItemComponent],
  exports: [CartComponent],
})
export class CartUiModule {}
