import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FarmproduceComponent } from './farmproduce.component';

const routes: Routes = [
  {
    path: '',
    component: FarmproduceComponent
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