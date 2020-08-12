import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CheckoutContactInformationComponent } from './contactInformation/contactInformation.component';
import { ShippingContactComponent } from './shippingContact/shippingContact.component';

const routes: Routes = [
    {
        path: '',
        component: CheckoutComponent,
        children: [
            {
                path: '',
                component: CheckoutContactInformationComponent
            },
            {
                path: 'shipping-contact',
                component: ShippingContactComponent
            }
        ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class CheckoutRoutingModule {}