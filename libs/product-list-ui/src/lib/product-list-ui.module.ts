import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@tcode/buttons';
import { ProductUiComponent } from './product-ui/product-ui.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { InputModule } from '@tcode/input';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    InputModule,
    ButtonsModule
  ],
  declarations: [ProductUiComponent, AddNewProductComponent],
  exports: [ProductUiComponent]
})
export class ProductListUiModule {}
