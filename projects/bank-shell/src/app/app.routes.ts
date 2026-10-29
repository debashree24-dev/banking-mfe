import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'loan'
    },
    {
        path: 'insurance',
        loadChildren: () => loadRemoteModule('insurance-mfe', './Routes').then(m => m.routes)
    },
    {
        path: 'loan',
        loadChildren: () => loadRemoteModule('loan-mfe', './Routes').then(m => m.routes)
    },
    {
        path: '**',
        redirectTo: 'loan'
    }
];
