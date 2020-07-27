import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BecomeAVendorComponent } from './becomeaVendor.component';
import { RegisterVendorComponent } from './register/register-vendor.component';

const routes: Routes = [
  {
    path: '',
    component: BecomeAVendorComponent
  },
  {
    path: 'register',
    component: RegisterVendorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class BecomeAVendorRoutingModule{}