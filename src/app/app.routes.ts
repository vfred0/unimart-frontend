import { Routes } from '@angular/router';
import { AppRoute } from '@core/utils/app-route';

export const routes: Routes = [
  {
    path: AppRoute.Home,
    loadChildren: () => import('@pages/home/home.routes').then(m => m.routes),
  },
  {
    path: `${AppRoute.ViewArticle}/:id`,
    loadChildren: () =>
      import('@pages/view-article/view-article-page.routes').then(
        m => m.routes
      ),
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
];
