import { Routes } from '@angular/router';
import { AppRoute } from '@core/utils/app-route';

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
  {
    path: `${AppRoute.EditProfile}`,
    loadComponent: () =>
      import(
        '@pages/profile/pages/edit-profile/edit-profile-page.component'
      ).then(m => m.EditProfilePageComponent),
  },
];
