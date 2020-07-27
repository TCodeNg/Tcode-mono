import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@tcode/buttons';
import { ProductModule } from '@tcode/product';
import { InputModule } from '@tcode/input';
import { InverterComponent } from './inverter.component';
import { InverterRoutingModule } from './inverter.routing.module';


@NgModule({
  declarations: [
    InverterComponent
  ],
  imports: [
    CommonModule,
    InverterRoutingModule,
    ButtonsModule,
    ProductModule,
    InputModule
  ],
  exports: []
})
export class InverterModule {}