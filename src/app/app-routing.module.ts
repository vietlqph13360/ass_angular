import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesFormComponent } from './admin/admin-categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './admin/admin-categories/categories-list/categories-list.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { LayoutsDetailComponent } from './client/layouts/layouts-detail/layouts-detail.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { CartComponent } from './page/cart/cart.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [
  {path:'',
  component:ClientComponent,
  children:[
    {path:'', component:HomeComponent},
    {path:'detail/:id',component:LayoutsDetailComponent}
  ]
},
  {
    path:'admin',
    component:AdminComponent,
    canActivate :[CanAccessAdminGuard],
    children:[
      {path:'',component:AdminListComponent},
      {path:'form',component:AdminFormComponent},
      {path:'products/:id',component:AdminDetailComponent},
      {path:'products/edit/:id',component:AdminFormComponent},
      {path:'categories', component:CategoriesListComponent},
      {path:'categories/creat', component:CategoriesFormComponent},
      {path:'categories/edit/:_id', component:CategoriesFormComponent},
      {path:'user',component:AdminUserComponent}
    ],
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'cart',
    component:CartComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard]
})
export class AppRoutingModule { }
