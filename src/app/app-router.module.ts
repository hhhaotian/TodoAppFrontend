import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from './auth.guard'

const appRoutes: Routes= [
  {
    path: "",
    component: LoginComponent
},
  {
    path: "login",
    component: LoginComponent
},
{
  path: "register",
  component: RegisterComponent
},
{
  path: "admin",
  component: AdminComponent,
  canActivate: [() => localStorage.getItem('userType') === "admin"]
},
  {
    path:"todos",
    component:TodoComponent,
    canActivate: [AuthGuard]
  }
]


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
