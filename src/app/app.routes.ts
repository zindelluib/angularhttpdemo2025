import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    { path : 'dashboard' , component : DashboardComponent , title : 'Dashboard'},
    { path : 'users' , component : UsersComponent , title : 'Users'},
    { path : '' , redirectTo : '/dashboard' , pathMatch : 'full'}
];
