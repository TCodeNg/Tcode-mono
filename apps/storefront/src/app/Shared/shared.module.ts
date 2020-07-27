import { NgModule } from "@angular/core";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImagepreviewModule } from '@tcode/imagepreview';
import { ProductratingModule } from '@tcode/productrating';
import { ButtonsModule } from '@tcode/buttons'
import { NavbarComponent } from './navbar/navbar.component';
import { InformationBarComponent } from './Information-bar/information-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './productDetail/productDetail.component';

@NgModule({
  declarations: [
    NavbarComponent,
    InformationBarComponent,
    FooterComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    ImagepreviewModule,
    ProductratingModule,
    RouterModule,
    ButtonsModule
  ],
  exports: [
    NavbarComponent,
    InformationBarComponent,
    FooterComponent,
    ProductDetailComponent
  ]
})
export class SharedModule {}