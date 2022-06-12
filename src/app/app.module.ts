import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { LayoutsComponent } from './client/layouts/layouts.component';
import { LayoutsHeaderComponent } from './client/layouts/layouts-header/layouts-header.component';
import { LayoutsFooterComponent } from './client/layouts/layouts-footer/layouts-footer.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { CartComponent } from './page/cart/cart.component';
import { LayoutsDetailComponent } from './client/layouts/layouts-detail/layouts-detail.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { CategoriesFormComponent } from './admin/admin-categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './admin/admin-categories/categories-list/categories-list.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    HomeComponent,
    LayoutsComponent,
    LayoutsHeaderComponent,
    LayoutsFooterComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    LayoutsDetailComponent,
    AdminListComponent,
    AdminFormComponent,
    AdminDetailComponent,
    AdminCategoriesComponent,
    CategoriesFormComponent,
    CategoriesListComponent,
    AdminUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
