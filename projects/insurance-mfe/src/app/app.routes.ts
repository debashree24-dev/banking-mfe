import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClaimListComponent } from './pages/claim-list/claim-list.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path:'claim-list',
        component: ClaimListComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];
