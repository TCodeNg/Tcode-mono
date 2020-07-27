import { NgModule } from "@angular/core";
import { LiveTrackRoutingModule } from './liveTrack.routing.module';
import { LiveTrackComponent } from './liveTrack.component';
import { InputModule } from '@tcode/input';
import { ButtonsModule } from '@tcode/buttons';


@NgModule({
  declarations: [
    LiveTrackComponent
  ],
  imports: [
    LiveTrackRoutingModule,
    InputModule,
    ButtonsModule
  ]
})
export class LiveTrackModule{}