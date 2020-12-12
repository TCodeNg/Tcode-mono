import { NgModule } from "@angular/core";
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment.routing.module';
import { SharedModule } from '../Shared/shared.module';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@tcode/buttons'
import { OrderModule } from '@tcode/order';

@NgModule({
     declarations: [
          PaymentComponent
     ],
     imports: [
          PaymentRoutingModule,
          CommonModule,
          SharedModule,
          ButtonsModule,
          OrderModule
     ]
})export class PaymentModule{}