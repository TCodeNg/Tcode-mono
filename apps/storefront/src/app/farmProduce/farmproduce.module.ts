import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmProduceRoutingModule } from './farmproduce.routing.module';
import { FarmproduceComponent } from './farmproduce.component';
import { ButtonsModule } from '@tcode/buttons';
import { ProductModule } from '@tcode/product';
import { InputModule } from '@tcode/input';
import { FarmProductComponent } from './farmProduceProduct/farmProduct.component';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [
    FarmproduceComponent, FarmProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ButtonsModule,
    ProductModule,
    InputModule,
    FarmProduceRoutingModule
  ],
  exports: []
})
export class FarmProduceModule {}