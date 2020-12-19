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
import { ImageModule } from '@tcode/image';
import { AddNewProductService } from './add-new-product/add-new-product.service';

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
    MatSnackBarModule,
    ImageModule.config({ baseUrl: "https://stage.backoffice.tcodemulticoncept.com"})
  ],
  declarations: [ProductUiComponent, AddNewProductComponent],
  exports: [ProductUiComponent],
  providers: [
    AddNewProductService
  ]
})
export class ProductListUiModule {}
