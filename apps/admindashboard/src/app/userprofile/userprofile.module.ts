import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CardModule } from '@tcode/card'
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations:[
    ProfileComponent
  ],
  imports:[
    CommonModule,
    CardModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent,
        data: {
          pageTitle: 'Admin user profile'
        }
      }
    ])
  ]
})
export class UserProfileModule{}