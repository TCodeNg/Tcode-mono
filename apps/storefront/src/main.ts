import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ParseCart } from '@tcode/cart';

const Parse = require('parse');

if (environment.production) {
  enableProdMode();
}

fetch('/app-config.json')
  .then(response => {
    return response.json();
  })
  .then(config => {
    configure(config);
    if (environment.production) {
      enableProdMode();
    }
    return platformBrowserDynamic()
      .bootstrapModule(AppModule);
  })
  .catch((err) => console.error(err));

function configure(config: any) {
  Parse.initialize(config.appId);
  Parse.serverURL = config.serverUrl;
  Parse.enableLocalDatastore();

  Parse.Object.registerSubclass('Cart', ParseCart);

  if (!Parse.User.current()) {
    const anonymousCart = new ParseCart();
    const user = localStorage.getItem(`Parse/${environment.appId}/installationId`);
    const cartQuery = new Parse.Query(ParseCart);
    cartQuery.equalTo('userId', user);
    setTimeout(async () => {
      try {
        const cart = await cartQuery.first();
        if (!cart) {
          anonymousCart.set('userId', user);
          anonymousCart.set('type', 'anonymous');
          await anonymousCart.save();
        }
      } catch (e) {
        console.log(e.message);
      }
    }, 1000)
  }

  Parse.LiveQuery.on('open', () => {
    console.log('socket connection established');
  });

  Parse.LiveQuery.on('close', () => {
    console.log('socket connection closed');
  });
}
