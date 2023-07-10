import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@pages/profile/profile-page.component').then(m => m.ProfilePageComponent),
    }
];