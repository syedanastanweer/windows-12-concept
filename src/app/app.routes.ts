import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title:'Windows 12 Concept | Developed by Syed Anas Tanweer',
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
];
