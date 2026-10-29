import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoanListComponent } from './pages/loan-list/loan-list.component';

export const routes: Routes = [
    {
        path:'',
        component: DashboardComponent
    },
    {
        path:'loanList',
        component: LoanListComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
