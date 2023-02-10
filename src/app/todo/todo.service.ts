import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status, Todo, AddTodoResponse, GetTodoResponse, TranslateResponse } from '../interfaces'
import { URL } from '../../../URL'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = []

  // url = "http://localhost:3000/api"

  constructor(private http: HttpClient){}

  getTodos(){
    const token = localStorage.getItem("token")
    // const headers = new HttpHeaders().set({'authorization' : `Bear ${token}`})
    this.http.get<GetTodoResponse>(`${URL}/api/todos/query`, {headers: {'authorization': `Bearer ${token}`}})
    .subscribe(todos => {
      this.todos = todos.data
    }, error => {
      console.log(error)
    })
  }

  addTodo(todo:string, deadline:string){
    const token = localStorage.getItem("token")
    const newTodo = {
      todo,
      deadline,
      done: false
    }
    console.log(newTodo)
    this.http.post<AddTodoResponse>(
      `${URL}/api/todos/add`, 
      newTodo,
      {headers: {'authorization': `Bearer ${token}`}}
      )
    .subscribe(res => {
      this.todos.push(res.data)
    },err => {
      console.log(err)
    })
  }

  //delete a todo
  deleteTodo(id:number){
    //delete todo from database
    const token = localStorage.getItem("token")
    return this.http.delete(`${URL}/api/todos/delete/${id}`,{headers: {'authorization': `Bearer ${token}`}})
  }

  //cahnge a todo statue
  changeStatus(status: Status){
    const token = localStorage.getItem("token")
    const {id, isDone} = status 
    const isdone = isDone? true :false
    return this.http.post(`${URL}/api/todos/update/${id}`, {isdone}, {headers: {'authorization': `Bearer ${token}`}})

  }


  //using google cloud AI Translate API to translate 
  translateTodo(todoId: number, target: string, userid: string | null){
    const todo = this.todos.filter(item => item.id === todoId)
    const translate = {"text": todo[0].todo, target:target, userid}
    return this.http.post<TranslateResponse>(`${URL}/api/translate`, translate)
  } 

}

