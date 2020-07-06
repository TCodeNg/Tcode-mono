import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AuthConfig, AuthGuard, FrontendAuthModule } from '@tcode/frontend-auth';
import { NgxsDataPluginModule } from '@ngxs-labs/data';

const authConfig: AuthConfig = {
  canResetPassword: true,
  canSignIn: true,
  canSignUp: true,
  appType: 'storefront'
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FrontendAuthModule.forRoot(authConfig),
    NgxsModule.forRoot([]),
    NgxsDataPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    RouterModule.forRoot([{
      path: '',
      loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule),
      canLoad: [AuthGuard]
    }], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
