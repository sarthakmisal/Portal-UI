import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {path:"login",  component:LoginComponent,pathMatch:"full"},
  {path:"signup",  component:SignupComponent,pathMatch:"full"},
  {path:"admin",  component:AdminDashboardComponent,pathMatch:"full",canActivate:[AdminGuard]},
  {path:"user",  component:DashboardComponent,pathMatch:"full",canActivate:[UserGuard]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
