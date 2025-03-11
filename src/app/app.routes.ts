import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    { path : 'dashboard' , component : DashboardComponent , title : 'Dashboard'},
    { path : 'users' , component : UsersComponent , title : 'Users'},
    { path : 'todos' ,component : TodosComponent , title : 'Todo List' } , 
    { path : 'products' , component : ProductsComponent , title : 'Products'},
    { path : '' , redirectTo : '/dashboard' , pathMatch : 'full'}
];
