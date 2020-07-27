import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FarmproduceComponent } from './farmproduce.component';
import { FarmProductComponent } from './farmProduceProduct/farmProduct.component';

const routes: Routes = [
  {
    path: '',
    component: FarmproduceComponent
  },
  {
    path: 'product/:id',
    component: FarmProductComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class FarmProduceRoutingModule{}