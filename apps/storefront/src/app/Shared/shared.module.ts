import { NgModule } from "@angular/core";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { InformationBarComponent } from './Information-bar/information-bar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    InformationBarComponent
  ],
  imports: [
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    InformationBarComponent
  ]
})
export class SharedModule {}