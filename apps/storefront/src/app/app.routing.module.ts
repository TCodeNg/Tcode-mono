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
    path: 'inverters',
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
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./order/order.module').then(m => m.OrderStorefrontModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}