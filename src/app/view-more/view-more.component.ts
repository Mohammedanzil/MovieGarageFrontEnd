import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent {

  movie:any;
  viewMovie:any
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){

  }
  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((data:any)=>{
      console.log(data['movie']);
      this.movie = data['movie']
      console.log(this.movie);
      
    })

    //to get details of requested product
    this.api.viewMovie(this.movie)
    .subscribe((result:any)=>{
      console.log(result.movie);
      this.viewMovie = result.movie
    }) 
  }
  // addwatchLater(viewMovie)
  addwatchLater(movie:any){
    this.api.addwatchLater(movie)
    .subscribe((result:any)=>{
      alert(result.message)
    },
      (result:any)=>{
        alert(result.error.message)
    })
  }

  // //addToCart(viewProduct)
  // addToCart(product:any){
  //   this.cart.addToCart(product)
  // }
}

