import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  username: unknown

  constructor(private router:Router, public todoService: TodoService){}

  ngOnInit(){
    this.username = localStorage.getItem("username") 
    //get todos from database
    this.todoService.getTodos()
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['./login'])
  }

}
