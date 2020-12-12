import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../core/constant';
import { AuthGuard } from '@tcode/frontend-auth';

const routes: Routes = [
  {
    path: ROUTES.adminDashboard.home,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canLoad: [AuthGuard]
  },
  
  {
    path: ROUTES.adminDashboard.profile,
    loadChildren: async () => {
      const m = await import('./userprofile/userprofile.module')
      return m.UserProfileModule
    },
    canLoad: [AuthGuard]
  },
  {
    path: ROUTES.adminDashboard.orders.home,
    loadChildren: async () => {
      const m = await import('./orders/ordersadmin.module')
      return m.OrdersAdminModule
    },
    canLoad: [AuthGuard]
  },
  {
    path: ROUTES.adminDashboard.products.home,
    loadChildren: async () => {
      const m = await import('./products/products.module')
      return m.ProductsModule
    },
    canLoad: [AuthGuard]
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      initialNavigation: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }