import { Routes } from '@angular/router';
import { AppRoute } from '@core/utils/app-route';

export const routes: Routes = [
  {
    path: `${AppRoute.Auth}`,
    loadChildren: () =>
      import('@pages/auth/auth-page.routes').then(m => m.routes),
  },
  {
    path: AppRoute.Home,
    loadChildren: () =>
      import('@pages/home/home-page.routes').then(m => m.routes),
  },
  {
    path: `${AppRoute.Article}/:id`,
    loadChildren: () =>
      import('@pages/article/article-page.routes').then(m => m.routes),
  },
  {
    path: AppRoute.PublishArticle,
    loadChildren: () =>
      import('@pages/publish-article/publish-article-page.routes').then(
        m => m.routes
      ),
  },
  {
    path: AppRoute.Profile,
    loadChildren: () =>
      import('@pages/profile/profile-page.routes').then(m => m.routes),
  },
  {
    path: AppRoute.Exchanges,
    loadChildren: () =>
      import('@pages/exchanges/exchanges-page.routes').then(m => m.routes),
  },
  {
    path: `${AppRoute.EditArticle}/:id`,
    loadChildren: () =>
      import('@pages/publish-article/publish-article-page.routes').then(
        m => m.routes
      ),
  },
];
