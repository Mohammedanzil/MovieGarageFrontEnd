import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FilterpipePipe } from './filterpipe.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ViewMoreComponent,
    WatchLaterComponent,
    AdminAddComponent,
    AdminViewComponent,
    AdminLoginComponent,
    FilterpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
   
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
