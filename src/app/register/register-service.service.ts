import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {URL} from '../../../URL'

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) { }

  // URL = "http://localhost:3000/api/users/register"

  userRigster(username: string, password: string){
    const reqBody = {
      username,
      password,
      type: 'user'
    }

    return this.http.post(`${URL}/api/users/register`, reqBody)
  }

}
