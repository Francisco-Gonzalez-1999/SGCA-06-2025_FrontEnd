import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // Añade esto

import { routes } from './app.routes';
// ------- PrimeNg -------
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import Lara from '@primeng/themes/lara';
import material from '@primeng/themes/material';
import MyPreset from './mypreset';

// ------- ------- -------

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideAnimations(),
      providePrimeNG({
        theme: {
          preset: MyPreset,
          options: {
            darkModeSelector: '.app-dark' } } })
  ]
};
