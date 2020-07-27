import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../Shared/shared.module';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '@tcode/buttons';
import { ProductModule } from '@tcode/product';
import { LandingProductComponent } from './landingProduct/landingProduct.component';

@NgModule({
  declarations: [LandingComponent, LandingProductComponent],
  imports: [
    CommonModule,    
    ButtonsModule,
    ProductModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'product/:id',
        component: LandingProductComponent
      }
    ])
  ]
})
export class LandingModule { }
