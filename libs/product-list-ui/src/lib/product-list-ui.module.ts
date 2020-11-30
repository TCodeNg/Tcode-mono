import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@tcode/buttons';
import { ProductUiComponent } from './product-ui/product-ui.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InputModule } from '@tcode/input';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    MatDialogModule,
    InputModule
  ],
  declarations: [ProductUiComponent, AddNewProductComponent],
  exports: [ProductUiComponent]
})
export class ProductListUiModule {}
