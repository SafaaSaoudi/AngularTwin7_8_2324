import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"users", component:UsersComponent,
  children:[{path:"addUser", component:AddUserComponent},
{path:"editUser/:param", component:EditUserComponent}]},
  {path:"products", component:ProductsComponent},
  {path:"**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
