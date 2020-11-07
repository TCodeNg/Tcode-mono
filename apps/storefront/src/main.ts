import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const Parse = require('parse');

if (environment.production) {
  enableProdMode();
}

Parse.initialize(environment.appId);
Parse.serverURL = environment.serverUrl;
Parse.enableLocalDatastore();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
