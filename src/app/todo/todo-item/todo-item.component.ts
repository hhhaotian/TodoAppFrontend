import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TodoService } from '../todo.service';
import {Todo} from '../../interfaces'


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() id: number
  @Output() todoId = new EventEmitter()
  @Output() changeTodo = new EventEmitter()

  constructor(private todoService: TodoService){}

  todoItem: Todo
  selected: string = ''
  todo: string = ''
  year: number = 1990
  month: string = ''
  day: number = 0
  isDone: boolean = false

  ngOnInit(){
    for(let i = 0; i < this.todoService.todos.length; i++){
      if(this.todoService.todos[i].id === this.id){
        this.todoItem = this.todoService.todos[i]
      }
    }
    console.log(this.todoItem)
    const {deadline, done, todo} = this.todoItem
    this.isDone = done
    this.todo = todo
    const date = new Date(deadline)
    this.year = date.getFullYear()
    this.month = date.toLocaleDateString("en-US", {month: "short"})
    this.day = date.getDate()
  }

  //Translate todo into one of language
  translateTodo(){
    const userId = localStorage.getItem("userId")
    this.todoService.translateTodo(this.id, this.selected, userId).subscribe(
      res => {
        if(res){
          this.todo = res.data.translations[0].translatedText
        }
      }
    )
  }

  

  
}

