import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '../interfaces';
import {URL} from '../../../URL'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router
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
        console.log("error")
      }
    }, error => {
      console.log("cannot log in")
    })

    }
  
    registerHandler(){
      this.router.navigate(['./register'])
    }
    
  }


