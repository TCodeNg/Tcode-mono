import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../Shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatBadgeModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent
      }
    ])
  ]
})
export class LandingModule { }
