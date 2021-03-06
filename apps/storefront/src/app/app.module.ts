import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AuthConfig, FrontendAuthModule } from '@tcode/frontend-auth';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { SharedModule } from './Shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonsModule } from '@tcode/buttons';
import { CartModule } from '@tcode/cart';
import { CartUiModule } from '@tcode/cart-ui';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppState } from './++state/app.state';

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
    AppRoutingModule,
    FrontendAuthModule.forRoot(authConfig, 'customer'),
    CartModule,
    NgxsModule.forRoot([ AppState ]),
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    ButtonsModule,
    CartUiModule,
    MatSidenavModule,
    NgxsDataPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
