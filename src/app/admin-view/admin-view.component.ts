import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit{
 allfilm:any=[]
 AdminViewStatusMsg=''
constructor(private api:ApiService){}

ngOnInit(): void {
  this.api.allmovies()
  .subscribe((result:any)=>{
    this.allfilm=result.allfilm

  })
}
removieMovie(movie:any){
  this.api.removeMovie(movie)
  .subscribe(
  //200
  (result:any)=>{
    this.allfilm = result.allfilm
    if(this.allfilm.length==0){ 
      this.AdminViewStatusMsg = "Your Garage is empty"
    }

  },
  //400
  (result:any)=>{
    alert(result.error.message)
  }  
  )

}

}
