import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '../interfaces';
import {URL} from '../../URL'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
    ){}

  loginGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })


  handlerSubmit(){
    if(!this.loginGroup.valid) return 
    this.http.post<Response>(`${URL}/api/users/login`, 
      {
        username: this.loginGroup.get('username')?.value,
        password: this.loginGroup.get('password')?.value
    })
    .subscribe(res => {
      const {status, data} = res
      if(status === 'ok'){
        localStorage.setItem("token", res.token)
        localStorage.setItem("username", data.username)
        localStorage.setItem("userId", data.id)
        localStorage.setItem("userType", data.type)
        if(data.type === "user"){
          this.router.navigate(['/todos'])
        }
        else if(data.type === 'admin'){
          this.router.navigate(['/admin'])
        }
      }else{
        console.log(data)
        this.snackBar.open("Login error, username or password is wrong", "OK", {duration:3000, verticalPosition:"top"})
      }
    }, error => {
      this.snackBar.open("Login error, please try again", "OK", {duration:3000, verticalPosition:"top"})
    })

    }
  
    registerHandler(){
      this.router.navigate(['./register'])
    }
    
  }


