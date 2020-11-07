import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { TableModule } from '@tcode/table';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    TableModule,
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