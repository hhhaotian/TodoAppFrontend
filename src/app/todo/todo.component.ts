import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  username: unknown

  constructor(private router:Router){}

  ngOnInit(){
    this.username = localStorage.getItem("username") 
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['./login'])
  }

}
