import { NgModule } from "@angular/core";
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment.routing.module';
import { SharedModule } from '../Shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
     declarations: [
          PaymentComponent
     ],
     imports: [
          PaymentRoutingModule,
          CommonModule,
          SharedModule
     ]
})export class PaymentModule{}