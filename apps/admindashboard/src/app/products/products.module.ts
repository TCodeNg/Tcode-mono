import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { TableModule } from '@tcode/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CardModule } from '@tcode/card';
import { ButtonsModule } from '@tcode/buttons'
import { ProductListUiModule } from '@tcode/product-list-ui'
import { ProductListComponent } from './productlist/productlist.component';
import { ProductModule } from '@tcode/product';
import { ProductComponent } from './product/product.component';
import { ProductDetailUiModule } from '@tcode/product-detail-ui';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    MatTabsModule,
    CardModule,
    ButtonsModule,
    ProductModule,
    ProductListUiModule,
    ProductDetailUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent,
        data: {
          pageTitle: 'Products'
        }
      },
      {
        path: `:id`,
        component: ProductComponent,
        data: {
          pageTitle: 'Product'
        }
      }
    ])
  ],
  exports: [

  ]
})
export class ProductsModule { }