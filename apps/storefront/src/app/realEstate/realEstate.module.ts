import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RealEstateRoutingModule } from './realEstate.routing.module';
import { ButtonsModule } from '@tcode/buttons';
import { ProductModule } from '@tcode/product';
import { InputModule } from '@tcode/input';
import { RealEstateComponent } from './realEstate.component';
import { RealEstateProductComponent } from './realEstateProduct/realEstateProduct.component';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations:[
    RealEstateComponent,
    RealEstateProductComponent
  ],
  imports:[
    CommonModule,
    SharedModule,
    RealEstateRoutingModule,
    ButtonsModule,
    ProductModule,
    InputModule
  ]
})
export class RealEstateModule {}