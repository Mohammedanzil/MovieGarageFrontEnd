import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    errorMsg:string=''

  loginForm=this.form.group(
    {
      email:['',[Validators.required,Validators.pattern('[0-9@a-z]*')]],
      pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
    }
  )
  constructor(private form:FormBuilder,private api:ApiService,private router:Router){
  }
  login(){
    console.log(this.loginForm);
    if(this.loginForm.valid){
    let email=this.loginForm.value.email
    let pswd=this.loginForm.value.pswd
      // login api call
      this.api.login(email,pswd)
      .subscribe((result:any)=>{
        // store email in local storage
        localStorage.setItem("email",result.email)
        // store token
        localStorage.setItem("token",result.token)
        alert(result.message)
        //navigate to login
         this.router.navigateByUrl('Click-On/All-Movies')
      },
      (result:any)=>{
        this.errorMsg= result.error.message;
      }
      )
    }
    else{
      alert('Invalid Form')
    }
  }

}
