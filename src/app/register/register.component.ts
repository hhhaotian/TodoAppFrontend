import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators, AbstractControl} from '@angular/forms'
import { RegisterServiceService } from './register-service.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(
      private fb: FormBuilder, 
      private registerService: RegisterServiceService, 
      private snackBar: MatSnackBar,
      private router: Router){}


  registerGroup = this.fb.group({
    username: ['', [Validators.required, this.checkUsername]],
    password: ['', [Validators.required]],
    pwdConfirm: ['', [Validators.required,]]
  },{
    validator: this.checkPwdvalidator('password', 'pwdConfirm')
  }
  )

  ngOnInit(): void {
    
  }


  registerHandler(){
    if(this.registerGroup.hasError('match')){
      this.snackBar.open(`Password is not same`, 'OK' ,{duration: 3000, verticalPosition:"top"});
      return
    } 
    const username = this.registerGroup.get("username")?.value
    const password = this.registerGroup.get('password')?.value
    this.registerService.userRigster(username, password).subscribe(
      res => {
        this.router.navigate(['/login'])
      },
      error => {
        if(error.error.data === 'username exists, please login')
        this.snackBar.open(`Username ${username} is existed`, "OK", {duration:3000, verticalPosition:"top"});
        // alert("registration failed, please try again")
      }
    )
  }

  //check invalid username, only one default admin account which is admin
  checkUsername(controller: AbstractControl){
    const value = controller.value
    const reg = new RegExp('\^admin\$')
    if(reg.test(value)){
      return({'invalid':"invalid username"})
    }
    return null
  }

  //password needs to be input twice, check if two times are same
  checkPwdvalidator(inputField1: string, inputField2: string){
    return (controller:AbstractControl) => {
      let field1Value = controller.get(inputField1)?.value
      let field2Value = controller.get(inputField2)?.value
      if (field1Value !== '' && field1Value !== field2Value){
        return({'match' : "passwords not same"})
      }
      return null
    }
  }

}
