import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@tcode/buttons'
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule, 
    ButtonsModule, 
    MatIconModule
  ],
  declarations: [CartComponent, CartItemComponent],
  exports: [CartComponent],
})
export class CartUiModule {}
