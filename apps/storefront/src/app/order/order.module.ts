import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from '@tcode/order';
import { TableModule } from '@tcode/table';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderStorefrontRoutingModule } from './order.routing.module';
import { OrderDetailUiModule } from '@tcode/order-detail-ui';


@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    OrderModule,
    TableModule,
    OrderStorefrontRoutingModule,
    OrderDetailUiModule
  ]
})
export class OrderStorefrontModule { }
