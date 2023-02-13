import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Logs } from '../interfaces'
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminComponent implements OnInit{
  columnsToDisplay = ['id', 'username', 'password', 'translations', 'logs'];
  // columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  // expandedElement: UserInfo | null;

  constructor(public service: AdminService, private router:Router){}

  ngOnInit(): void {
    this.service.getUserList()
  }

  showSpinner: boolean = false
  displayLog:boolean = false
  logs: Logs[]
  
  login(id: string){
    this.showSpinner = true
    this.service.getUserLog(id).subscribe(
      res => {
        if(res.status === 'ok'){
          this.logs = res.data
          this.displayLog = true
          this.showSpinner = false
        } 
      },
      () => {
        this.showSpinner = false
      }
    )
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}

