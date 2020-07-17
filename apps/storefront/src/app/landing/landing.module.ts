import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../Shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ButtonsModule } from '@tcode/buttons';
import { ProductModule } from '@tcode/product';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,    
    ButtonsModule,
    ProductModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent
      }
    ])
  ]
})
export class LandingModule { }
