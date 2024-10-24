import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';

const routes: Routes = [
  {path:"login",  component:LoginComponent,pathMatch:"full"},
  {path:"signup",  component:SignupComponent,pathMatch:"full"},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
