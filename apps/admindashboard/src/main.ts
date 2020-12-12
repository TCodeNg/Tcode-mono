import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const Parse = require('parse');

Parse.initialize(environment.appId);
Parse.serverURL = environment.serverUrl;
Parse.enableLocalDatastore();

Parse.LiveQuery.on('open', () => {
  console.log('socket connection established');
});

Parse.LiveQuery.on('close', () => {
  console.log('socket connection closed');
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
