import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ParseCart } from '@tcode/cart';

const Parse = require('parse');

if (environment.production) {
  enableProdMode();
}

Parse.initialize(environment.appId);
Parse.serverURL = environment.serverUrl;
Parse.enableLocalDatastore();

Parse.Object.registerSubclass('Cart', ParseCart);

Parse.LiveQuery.on('open', () => {
  console.log('socket connection established');
});

Parse.LiveQuery.on('close', () => {
  console.log('socket connection closed');
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
