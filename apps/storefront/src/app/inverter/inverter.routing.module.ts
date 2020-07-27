import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { InverterComponent } from './inverter.component';
import { InverterProductComponent } from './inverterProduct/inverterProduct.component';

const routes: Routes = [
  {
    path: '',
    component: InverterComponent
  },
  {
    path: 'product/:id',
    component: InverterProductComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InverterRoutingModule{}