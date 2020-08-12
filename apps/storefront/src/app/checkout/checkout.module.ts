import { NgModule } from "@angular/core";
import { CheckoutRoutingModule } from './checkout.routing.module';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '../Shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CheckoutContactInformationComponent } from './contactInformation/contactInformation.component';
import { InputModule } from '@tcode/input';
import { ButtonsModule } from '@tcode/buttons';
import { ShippingContactComponent } from './shippingContact/shippingContact.component';

@NgModule({
    declarations: [
        CheckoutComponent,
        CheckoutContactInformationComponent,
        ShippingContactComponent
    ],
    imports: [
        CommonModule,SharedModule,
        MatIconModule,
        CheckoutRoutingModule,
        InputModule,
        ButtonsModule
    ],
    exports: []
})
export class CheckoutModule {}