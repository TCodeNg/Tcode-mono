import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { TableModule } from '@tcode/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CardModule } from '@tcode/card';
import { ButtonsModule } from '@tcode/buttons'
import { OrderModule } from '@tcode/order';
import { OrdersComponent } from './orders/orders.component';
import { ProcessingOrdersComponent } from './processing-orders/processing-orders.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';
import { FailedOrdersComponent } from './failed-orders/failed-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { DisptachOrderComponent } from './modals/dispatch-order/dispatch-order.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderDetailUiModule } from '@tcode/order-detail-ui';
@NgModule({
  declarations: [
    OrdersComponent,
    ProcessingOrdersComponent,
    CompletedOrdersComponent,
    FailedOrdersComponent,
    OrderDetailsComponent,
    DisptachOrderComponent,
    PendingOrdersComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    MatTabsModule,
    CardModule,
    ButtonsModule,
    OrderModule,
    MatDialogModule,
    OrderDetailUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrdersComponent,
        data: {
          pageTitle: 'Orders'
        }
      },
      {
        path: `:id`,
        component: OrderDetailsComponent,
        data: {
          pageTitle: 'Order'
        }
      }
    ])
  ],
  exports: [

  ]
})
export class OrdersAdminModule { }