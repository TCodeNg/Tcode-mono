import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { InverterComponent } from './inverter.component';

const routes: Routes = [
  {
    path: '',
    component: InverterComponent
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