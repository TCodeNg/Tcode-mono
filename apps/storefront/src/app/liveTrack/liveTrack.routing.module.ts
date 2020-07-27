import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LiveTrackComponent } from './liveTrack.component';

const routes: Routes = [
  {
    path: '',
    component: LiveTrackComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LiveTrackRoutingModule{}