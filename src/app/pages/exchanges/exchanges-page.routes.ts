import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/exchanges/exchanges-page.component').then(
        m => m.ExchangesPageComponent
      ),
  },
];
