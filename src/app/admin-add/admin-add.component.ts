import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent {
  addForm=this.form.group(
    {
      movie:['',[Validators.required,Validators.pattern('[0-9.,:() a-zA-Z]*')]],
      dirc:['',[Validators.required,Validators.pattern('[0-9., a-zA-Z]*')]],
      actor:['',[Validators.required,Validators.pattern('[0-9., a-zA-Z]*')]],
      cat:['',[Validators.required,Validators.pattern('[0-9.,:() a-zA-Z]*')]],
      desc:['',[Validators.required,Validators.pattern('[0-9.,:() a-zA-Z]*')]],
      time:['',[Validators.required,Validators.pattern('[0-9 :a-zA-Z]*')]],
      image:['',[Validators.required]]
    }
  )
 constructor(private form:FormBuilder,private api:ApiService,private router:Router){}
 addItem(){
  console.log(this.addForm);
  if(this.addForm.valid){
  let movie=this.addForm.value.movie
  let dirc=this.addForm.value.dirc
  let actor=this.addForm.value.actor
  let cat=this.addForm.value.cat
  let desc=this.addForm.value.desc
  let time=this.addForm.value.time
  let image=this.addForm.value.image
  this.api.addItem(movie,dirc,actor,cat,desc,time,image)
  .subscribe((result:any)=>{
    alert(result.message)
    // navigate to admin view
    this.router.navigateByUrl('Click-On/Admin-view')
  },
  (result:any)=>{
    alert(result.error.message);
  })
  
  }
  else{
    alert('Invalid Form')
  }
}
}
