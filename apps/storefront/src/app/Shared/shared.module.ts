import { NgModule } from "@angular/core";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule {}