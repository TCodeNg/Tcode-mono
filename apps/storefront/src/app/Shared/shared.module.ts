import { NgModule } from "@angular/core";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { InformationBarComponent } from './Information-bar/information-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    InformationBarComponent,
    FooterComponent
  ],
  imports: [
    MatMenuModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    InformationBarComponent,
    FooterComponent
  ]
})
export class SharedModule {}