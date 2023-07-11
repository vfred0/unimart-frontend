import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/view-article/view-article-page.component').then(
        m => m.ViewArticlePageComponent
      ),
  },
  {
    path: 'suggest',
    loadComponent: () =>
      import(
        '@pages/view-article/pages/suggest-article/suggest-article-page.component'
      ).then(m => m.SuggestArticlePageComponent),
  },
];
