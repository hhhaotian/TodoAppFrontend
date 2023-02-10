import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators, AbstractControl} from '@angular/forms'
import { RegisterServiceService } from './register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private fb: FormBuilder, private registerService: RegisterServiceService, private router: Router){}

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
    console.log(this.registerGroup.valid)
    if(!this.registerGroup.valid) return
    const username = this.registerGroup.get("username")?.value
    const password = this.registerGroup.get('password')?.value
    console.log(username, password)
    this.registerService.userRigster(username, password).subscribe(
      res => {
        this.router.navigate(['/login'])
      }
    )
  }

  checkUsername(controller: AbstractControl){
    const value = controller.value
    const reg = new RegExp('\^admin\$')
    if(reg.test(value)){
      return({'invalid':"invalid username"})
    }
    return null
  }

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
