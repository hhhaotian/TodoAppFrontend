import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputTodoComponent } from './todo/input-todo/input-todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { MaterialModule } from './material.module';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { AppRouterModule } from './app-router.module';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';



  


@NgModule({
  declarations: [
    AppComponent,
    InputTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AppRouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
