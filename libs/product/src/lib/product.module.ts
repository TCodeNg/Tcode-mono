import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductratingModule } from '@tcode/productrating'
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductImageComponent } from './product-image/product-image.component';

@NgModule({
  imports: [
    CommonModule,
    ProductratingModule
  ],
  declarations: [ProductItemComponent, ProductImageComponent],
  exports: [ProductItemComponent, ProductImageComponent],
})
export class ProductModule {}
