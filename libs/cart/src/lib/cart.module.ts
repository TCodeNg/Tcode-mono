import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParseCartService } from './parse.cart.service';
import { CART_SERVICE_TOKEN } from './cart.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: CART_SERVICE_TOKEN,
      useClass: ParseCartService
    }
  ]
})
export class CartModule {}
