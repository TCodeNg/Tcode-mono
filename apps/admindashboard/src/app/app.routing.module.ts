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
    path: ROUTES.adminDashboard.orders.home,
    loadChildren: async () => {
      const m = await import('./orders/orders.module')
      return m.OrdersModule
    },
  },
  {
    path: ROUTES.adminDashboard.products.home,
    loadChildren: async () => {
      const m = await import('./products/products.module')
      return m.ProductsModule
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