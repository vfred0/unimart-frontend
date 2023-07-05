import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@pages/publish-article/publish-article-page.component').then(m => m.PublishArticlePageComponent),
    }
];