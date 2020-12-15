import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailLibComponent } from './product/product.component';
import { ImagepreviewModule } from '@tcode/imagepreview';
import { ProductratingModule } from '@tcode/productrating';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonsModule } from '@tcode/buttons';

@NgModule({
  imports: [
    CommonModule, 
    ImagepreviewModule,
    ProductratingModule,
    MatSnackBarModule,
    ButtonsModule
  ],
  declarations: [ProductDetailLibComponent],
  exports: [ProductDetailLibComponent],
})
export class ProductDetailUiModule {}
