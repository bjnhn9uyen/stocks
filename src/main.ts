import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// If production is enabled, turn off Angular developer mode.
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  // Bootstraps the App module
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));