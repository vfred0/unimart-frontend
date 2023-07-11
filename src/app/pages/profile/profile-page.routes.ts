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
    path: `${AppRoute.ProposedArticles}/:articleId`,
    loadComponent: () =>
      import(
        '@pages/profile/pages/proposed-articles/proposed-articles-page.component'
      ).then(m => m.ProposedArticlesPageComponent),
  },
];
