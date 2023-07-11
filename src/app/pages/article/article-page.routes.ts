import { Routes } from '@angular/router';
import { AppRoute } from '@core/utils/app-route';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/article/article-page.component').then(
        m => m.ArticlePageComponent
      ),
  },
  {
    path: `${AppRoute.Suggest}`,
    loadComponent: () =>
      import(
        '@pages/article/pages/suggest-article/suggest-article-page.component'
      ).then(m => m.SuggestArticlePageComponent),
  },
];
