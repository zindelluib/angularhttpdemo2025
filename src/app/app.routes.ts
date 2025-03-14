import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
export const routes: Routes = [
    { path : 'dashboard' , component : DashboardComponent , title : 'Dashboard'},
    { path : 'users' , component : UsersComponent , title : 'Users'},
    { path : 'todos' ,component : TodosComponent , title : 'Todo List' } , 
    { path : 'products' , component : ProductsComponent , title : 'Products'},
    { path : 'products/:id' , component : ProductDetailComponent , title : 'Product Detail' },
    { path : '' , redirectTo : '/dashboard' , pathMatch : 'full'}
];
