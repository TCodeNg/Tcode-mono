import { NgModule } from "@angular/core";
import { BecomeAVendorRoutingModule } from './becomeaVendor.routing.module';
import { BecomeAVendorComponent } from './becomeaVendor.component';
import { ButtonsModule } from '@tcode/buttons';
import { CommonModule } from '@angular/common';
import { RegisterVendorComponent } from './register/register-vendor.component';
import { InputModule } from '@tcode/input';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BecomeAVendorComponent,
    RegisterVendorComponent,
  ],
  imports: [
    CommonModule,
    BecomeAVendorRoutingModule,
    InputModule,
    MatRadioModule,
    ButtonsModule,
    RouterModule
  ]
})
export class BecomeAVendorModule {}