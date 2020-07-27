import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { RealEstateComponent } from './realEstate.component';
import { RealEstateProductComponent } from './realEstateProduct/realEstateProduct.component';

const routes: Routes = [
  {
    path: '',
    component: RealEstateComponent
  },
  {
    path: 'product/:id',
    component: RealEstateProductComponent
  }
]
@NgModule({
  declarations:[],
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RealEstateRoutingModule {}