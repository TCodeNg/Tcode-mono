import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthConfig, FrontendAuthModule } from '@tcode/frontend-auth'
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedComponentsModule } from './sharedcomponents/sharedcomponents.module';
import { NgxsModule } from '@ngxs/store';
import { CartModule } from '@tcode/cart';
import { CommonModule } from '@angular/common';

const authConfig: AuthConfig = {
  canResetPassword: true,
  canSignIn: true,
  canSignUp: true,
  appType: 'admin'
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FrontendAuthModule.forRoot(authConfig, 'admin'),
    AppRoutingModule,
    NgxsModule.forRoot([]),
    CartModule,
    MatSidenavModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
