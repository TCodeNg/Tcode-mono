import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../core/constant';

const routes: Routes = [
  {
    path: ROUTES.adminDashboard.home,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: ROUTES.adminDashboard.profile,
    loadChildren: async () => {
      const m = await import('./userprofile/userprofile.module')
      return m.UserProfileModule
    }
  },
  {
    path: ROUTES.adminDashboard.orders,
    loadChildren: async () => {
      const m = await import('./orders/orders.module')
      return m.OrdersModule
    }
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }