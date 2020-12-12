import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { TableModule } from '@tcode/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CardModule } from '@tcode/card';
import { ButtonsModule } from '@tcode/buttons'
import { ProductListComponent } from './productlist/productlist.component';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    MatTabsModule,
    CardModule,
    ButtonsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent,
        data: {
          pageTitle: 'Products'
        }
      },
    ])
  ],
  exports: [

  ]
})
export class ProductsModule { }