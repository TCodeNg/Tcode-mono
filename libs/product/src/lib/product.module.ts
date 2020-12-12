import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductratingModule } from '@tcode/productrating'
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PRODUCT_SERVICE_TOKEN } from './product.service';
import { ParseProductService } from './parse.product.service';
import { AddProductToCartPipe } from './add-product-to-cart.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProductratingModule
  ],
  declarations: [ProductItemComponent, ProductImageComponent, AddProductToCartPipe],
  exports: [ProductItemComponent, ProductImageComponent, AddProductToCartPipe],
  providers: [
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useClass: ParseProductService
    }
  ]
})
export class ProductModule {}
