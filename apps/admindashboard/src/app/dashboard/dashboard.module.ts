import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule
  ],
  exports: []
})
export class DashboardModule {}