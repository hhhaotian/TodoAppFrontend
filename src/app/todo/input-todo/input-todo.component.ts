import { Component } from '@angular/core';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.css']
})
export class InputTodoComponent {

  constructor(public todoService: TodoService){}

  todo = "";
  date = "";

  addTodo(){
    this.todo = this.todo.trim()
    if(this.todo === "" || this.date === "") return
    this.todoService.addTodo(this.todo, this.date)
    this.todo = ""
    this.date = ""
  }
}
