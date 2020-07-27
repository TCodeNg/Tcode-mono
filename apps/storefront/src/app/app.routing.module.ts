import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
 },
 {
   path: 'farm-produce',
   loadChildren: () => import('./farmProduce/farmproduce.module').then(m => m.FarmProduceModule)
 },
 {
    path: 'inverter',
    loadChildren: () => import('./inverter/inverter.module').then(m => m.InverterModule)
  },
  {
    path: 'real-estate',
    loadChildren: () => import('./realEstate/realEstate.module').then(m => m.RealEstateModule)
  },
  {
    path: 'track',
    loadChildren: () => import('./liveTrack/liveTrack.module').then(m => m.LiveTrackModule)
  },
  {
    path: 'become-vendor',
    loadChildren: () => import('./becomeAVendor/becomeaVendor.module').then(m => m.BecomeAVendorModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      initialNavigation: 'enabled'
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}