import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminResponse, UserInfo, LogResponse } from '../interfaces'
import {URL} from '../../URL'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
    this.getUserList()
  }

  userList: UserInfo[] = []
  

  getUserList(){
    const token = localStorage.getItem('token')
    this.http.get<AdminResponse>(`${URL}/api/users/list`, 
    {headers: {'authorization': `Bearer ${token}`}})
    .subscribe(res => {
      this.userList = res.data
    })
  }

  getUserLog(userid: string){
    return this.http.get<LogResponse>(`${URL}/api/users/${userid}`)
  }

}
