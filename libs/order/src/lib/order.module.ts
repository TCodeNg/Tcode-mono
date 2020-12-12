import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ORDER_SERVICE_TOKEN } from './order.service';
import { ParseOrderService } from './parse.order.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: ORDER_SERVICE_TOKEN,
      useClass: ParseOrderService
    }
  ]
})
export class OrderModule {}
