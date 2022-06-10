import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
