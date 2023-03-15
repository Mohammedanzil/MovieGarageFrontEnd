import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  errorMsg:string=''

  adminLoginForm=this.form.group(
    {
      email:['',[Validators.required,Validators.pattern('[0-9@a-z]*')]],
      pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
    }
  )
  constructor(private form:FormBuilder,private api:ApiService,private router:Router){
  }
  adminlogin(){
    console.log(this.adminLoginForm);
    if(this.adminLoginForm.valid){
    let email=this.adminLoginForm.value.email
    let pswd=this.adminLoginForm.value.pswd
      // login api call
     this.api.adminlogin(email,pswd)
    .subscribe((result:any)=>{
      // store token
      localStorage.setItem("adtoken",result.adtoken)
      alert (result.message)
        //navigate to login
        this.router.navigateByUrl('Click-On/Admin-view')
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
  //  logout 

}
