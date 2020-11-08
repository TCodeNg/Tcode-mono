import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { TableModule } from '@tcode/table';
import { MatTabsModule } from '@angular/material/tabs'
import { OrdersComponent } from './orders/orders.component';
import { ProcessingOrdersComponent } from './processing-orders/processing-orders.component';

@NgModule({
  declarations: [
    OrdersComponent,
    ProcessingOrdersComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    MatTabsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrdersComponent,
        data: {
          pageTitle: 'Orders'
        }
      }
    ])
  ],
  exports: [

  ]
})
export class OrdersModule { }