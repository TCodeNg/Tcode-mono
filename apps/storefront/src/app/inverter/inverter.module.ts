import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@tcode/buttons';
import { ProductModule } from '@tcode/product';
import { InputModule } from '@tcode/input';
import { InverterComponent } from './inverter.component';
import { InverterRoutingModule } from './inverter.routing.module';
import { InverterProductComponent } from './inverterProduct/inverterProduct.component';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations: [
    InverterComponent,
    InverterProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InverterRoutingModule,
    ButtonsModule,
    ProductModule,
    InputModule
  ],
  exports: []
})
export class InverterModule {}