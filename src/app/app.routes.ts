import { Routes } from '@angular/router';
import { DemoComponent } from './pages/home/demo/demo.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.routes').then(m => m.routes)
    }

];
