import { NgModule } from "@angular/core";
import { CheckoutRoutingModule } from './checkout.routing.module';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '../Shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CheckoutContactInformationComponent } from './contactInformation/contactInformation.component';

@NgModule({
    declarations: [
        CheckoutComponent,
        CheckoutContactInformationComponent
    ],
    imports: [
        CommonModule,SharedModule,
        MatIconModule,
        CheckoutRoutingModule,
    ],
    exports: []
})
export class CheckoutModule {}