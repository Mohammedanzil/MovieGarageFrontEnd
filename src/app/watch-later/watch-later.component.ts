import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-watch-later',
  templateUrl: './watch-later.component.html',
  styleUrls: ['./watch-later.component.css']
})
export class WatchLaterComponent implements OnInit {


   watchlater:any
   watchlaterStatusMsg=''

  constructor(private api:ApiService){ }

  ngOnInit(): void {
    this.api.getwatchlater()
    .subscribe((result:any)=>{
      this.watchlater =result.watchlater
      if(this.watchlater.length==0){ 
        this.watchlaterStatusMsg = "Your Watch later is empty"
      }
    },
    (result:any)=>{
      if(result.error.message){
        this.watchlaterStatusMsg ="Your Watch later is empty"
      }
      
    }
    )
  }
  removeItem(movie:any){
    this.api.removeWatchLater(movie)
    .subscribe(
      //200
      (result:any)=>{
      this.watchlater = result.watchlater
      if(this.watchlater.length==0){ 
        this.watchlaterStatusMsg = "Your Watch later is empty"
      }

    },
    //400
    (result:any)=>{
      alert(result.error.message)
    }
    )
  }
   
   }
  

