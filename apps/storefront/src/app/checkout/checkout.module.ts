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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { ContactModule } from '@tcode/contact';
import { CheckoutFormState } from './++state/checkout-form.state';
import { OrderModule } from '@tcode/order';

@NgModule({
    declarations: [
        CheckoutComponent,
        CheckoutContactInformationComponent,
        ShippingContactComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatIconModule,
        CheckoutRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        InputModule,
        MatCheckboxModule,
        MatRadioModule,
        ButtonsModule,
        ContactModule,
        OrderModule,
        NgxsModule.forFeature([CheckoutFormState])
    ],
    exports: []
})
export class CheckoutModule { }