import { Routes } from '@angular/router';
import { AppRoute } from '@core/utils/app-route';
import { canActivate, mustBeAuthenticated } from '@shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: `${AppRoute.AuthLogin}`,
    loadChildren: () =>
      import('@pages/auth/auth-page.routes').then(m => m.routes),
    canActivate: [mustBeAuthenticated],
  },
  {
    path: AppRoute.Home,
    loadChildren: () =>
      import('@pages/home/home-page.routes').then(m => m.routes),
    canActivate: [canActivate],
  },
  {
    path: `${AppRoute.Article}/:id`,
    loadChildren: () =>
      import('@pages/article/article-page.routes').then(m => m.routes),
    canActivate: [canActivate],
  },
  {
    path: AppRoute.PublishArticle,
    loadChildren: () =>
      import('@pages/publish-article/publish-article-page.routes').then(
        m => m.routes
      ),
    canActivate: [canActivate],
  },
  {
    path: AppRoute.Profile,
    loadChildren: () =>
      import('@pages/profile/profile-page.routes').then(m => m.routes),
    canActivate: [canActivate],
  },
  {
    path: AppRoute.Exchanges,
    loadChildren: () =>
      import('@pages/exchanges/exchanges-page.routes').then(m => m.routes),
    canActivate: [canActivate],
  },
  {
    path: `${AppRoute.EditArticle}/:id`,
    loadChildren: () =>
      import('@pages/publish-article/publish-article-page.routes').then(
        m => m.routes
      ),
    canActivate: [canActivate],
  },
  {
    path: '**',
    redirectTo: AppRoute.Home,
  },
];
