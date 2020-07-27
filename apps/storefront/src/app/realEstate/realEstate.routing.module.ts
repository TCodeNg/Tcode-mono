import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { RealEstateComponent } from './realEstate.component';

const routes: Routes = [
  {
    path: '',
    component: RealEstateComponent
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