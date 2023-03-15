import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm=this.form.group(
    {
      email:['',[Validators.required,Validators.pattern('[0-9@a-z]*')]],
      pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
      mob:['',[Validators.required,Validators.pattern('[0-9]*')]],
      name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
    }
  )
 constructor(private form:FormBuilder,private api:ApiService,private router:Router){}
 register(){
  console.log(this.registerForm);
  if(this.registerForm.valid){
  let email=this.registerForm.value.email
  let pswd=this.registerForm.value.pswd
  let mob=this.registerForm.value.mob
  let name=this.registerForm.value.name
  this.api.register(name,email,mob,pswd)
  .subscribe((result:any)=>{
    alert(result.message)
    //navigate to login
    this.router.navigateByUrl('Click-On/login')
  },
  (result:any)=>{
    alert(result.error.message);
  }
  )
  }
  else{
    alert('Invalid Form')
  }
}
}
