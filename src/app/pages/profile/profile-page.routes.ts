import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/profile/profile-page.component').then(
        m => m.ProfilePageComponent
      ),
  },
  {
    path: 'proposed/:articleId',
    loadComponent: () =>
      import('@pages/profile/pages/proposed/proposed-page.component').then(
        m => m.ProposedPageComponent
      ),
  },
];
