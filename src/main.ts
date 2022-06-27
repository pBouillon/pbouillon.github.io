import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { enableProdMode, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ROUTES } from './app/routes';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

registerLocaleData(localeFr);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    importProvidersFrom(RouterModule.forRoot(ROUTES))
  ]
}).catch(err => console.error(err));
