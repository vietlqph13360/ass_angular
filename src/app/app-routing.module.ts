import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { LayoutsDetailComponent } from './client/layouts/layouts-detail/layouts-detail.component';
import { CartComponent } from './page/cart/cart.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [
  {path:'',
  component:ClientComponent,
  children:[
    {path:'', component:HomeComponent},
    {path:'detail',component:LayoutsDetailComponent}
  ]
},
  {
    path:'admin',
    component:AdminComponent
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
