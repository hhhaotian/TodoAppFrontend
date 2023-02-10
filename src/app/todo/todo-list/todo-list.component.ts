import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Status } from '../../interfaces'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {


  constructor(public todoService:TodoService){}

  ngOnInit(){
    //get todos from database
    this.todoService.getTodos()
  }

  // delete a todo with received todo id
  deleteTodo(id:number){
    //delete a todo data in database
    this.todoService.deleteTodo(id).subscribe(res => {
      //if database deleted successfully, delete the todo locally
      if(res){
        let index = -1
        this.todoService.todos.forEach(item => {
          if(item.id === id){
            index = this.todoService.todos.indexOf(item)
          }
        })
        this.todoService.todos.splice(index, 1)
      }
    })
  }

  //chage a todo status with received todo id and current status
  changeStatus(status: Status){
    this.todoService.changeStatus(status)
    .subscribe(res => {
      //modify todo status locally
      if(res){
        const {id, isDone} = status
        for(let i=0; i < this.todoService.todos.length; i++ ){
          if(this.todoService.todos[i].id === id){
            //returned isDone is undefined when user set todo status is unfinished
            this.todoService.todos[i].done = isDone ? true : false
          }
        }
      }
    })
  }


}

