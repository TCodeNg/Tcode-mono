import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedComponentsModule } from './sharedcomponents/sharedcomponents.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
