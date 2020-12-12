import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '@tcode/table';
import { ButtonsModule } from '@tcode/buttons';
import { CardModule } from '@tcode/card';
import { OrderComponent } from './order/order.component';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ButtonsModule,
    CardModule
  ],
  declarations: [OrderComponent],
  exports: [OrderComponent],
})
export class OrderDetailUiModule {}
