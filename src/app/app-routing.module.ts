import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';

const routes: Routes = [
    //to redirect automatically from localhost:4200 

  {
     path:'' , redirectTo:'/Click-On/All-Movies' , pathMatch:'full'
  },
  // path for dashboard
  {
    path:'Click-On/All-Movies' ,component:DashboardComponent
  },
  //path for login
  {
    path:'Click-On/login' , component:LoginComponent
  },
  //path for register
  {
    path:'Click-On/register' , component:RegisterComponent
  },
  //ViewMoreComponent
  {
    path: 'Click-On/view-more/:movie' , component:ViewMoreComponent
  },
  // WatchLaterComponent
  {
    path: 'Click-On/watch-later' , component:WatchLaterComponent
  },
   // AdminLoginComponent
  {
    path: 'Click-On/Admin-login' , component:AdminLoginComponent
  },
   // AdminViewComponent 
  {
    path: 'Click-On/Admin-view' , component:AdminViewComponent
  },
  // AdminAddComponent
  {
    path: 'Click-On/Admin-add' , component:AdminAddComponent
  },
  //PageNotFoundComponent
  {
    path:'**' , component:PageNotFoundComponent
  }
 
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
