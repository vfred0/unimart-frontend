import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('@pages/home/home.routes').then(m => m.routes)
    },
    {
        path: 'view-article/:id',
        loadChildren: () => import('@pages/view-article/view-article-page.routes').then(m => m.routes)
    }
];