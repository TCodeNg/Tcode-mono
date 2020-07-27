import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RealEstateRoutingModule } from './realEstate.routing.module';
import { ButtonsModule } from '@tcode/buttons';
import { ProductModule } from '@tcode/product';
import { InputModule } from '@tcode/input';
import { RealEstateComponent } from './realEstate.component';

@NgModule({
  declarations:[
    RealEstateComponent
  ],
  imports:[
    CommonModule,
    RealEstateRoutingModule,
    ButtonsModule,
    ProductModule,
    InputModule
  ]
})
export class RealEstateModule {}