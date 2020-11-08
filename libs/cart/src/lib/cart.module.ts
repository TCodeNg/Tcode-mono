import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParseCartService } from './parse.cart.service';
import { CART_SERVICE_TOKEN } from './cart.service';
import { STORAGE_TOKEN } from '@tcode/shared/assets';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: CART_SERVICE_TOKEN,
      useClass: ParseCartService,
      deps: [STORAGE_TOKEN]
    },
    {
      provide: STORAGE_TOKEN,
      useValue: localStorage
    }
  ]
})
export class CartModule {}
