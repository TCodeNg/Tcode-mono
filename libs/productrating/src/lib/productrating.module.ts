import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRatingComponent } from './product-rating/product-rating.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductRatingComponent],
  exports: [ProductRatingComponent],
})
export class ProductratingModule {}
