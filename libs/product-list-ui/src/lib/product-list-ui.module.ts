import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@tcode/buttons';
import { ProductUiComponent } from './product-ui/product-ui.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { InputModule } from '@tcode/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    InputModule,
    ButtonsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  declarations: [ProductUiComponent, AddNewProductComponent],
  exports: [ProductUiComponent]
})
export class ProductListUiModule {}
