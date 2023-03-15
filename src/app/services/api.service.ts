import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const options={
  headers:new HttpHeaders()
}
const option={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // register
  register(name:any,email:any,phone:any,pswd:any){
    const body={
            name,
            email,
            phone,
            pswd
    }
  return  this.http.post('http://localhost:3000/register',body)
  }

  // login 
   login(email:any,pswd:any){
     const body={
            email,
            pswd
     }
   return  this.http.post('http://localhost:3000/login',body)
   }
    // adminlogin 
    adminlogin(email:any,pswd:any){
      const body={
             email,
             pswd
      }
    return  this.http.post('http://localhost:3000/adminlogin',body)
    }

    // AddItem
  addItem(movie:any,dirc:any,actor:any,cat:any,desc:any,time:any,image:any){
    const body={
            movie,
            dirc,
            actor,
            cat,
            desc,
            time,
            image
    }
  return  this.http.post('http://localhost:3000/addItem',body)
  }

  // allmovies
  allmovies(){
  return  this.http.get('http://localhost:3000/all-movies')
  }

  //view-movie api
  viewMovie(movie:any){
    return  this.http.get('http://localhost:3000/view-more/'+movie,this.appendtoken())
  }


  // appending to the http header
  appendtoken(){
  // fetch token from localstorage
  const token = localStorage.getItem("token")||''
  // create http header
  var headers= new HttpHeaders()
  if(token){
     // append token inside http headers
  headers=headers.append('access-token',token)
  options.headers=headers
  }
  return options 
  }

   // appending to the http header
   appendtoken2(){
    // fetch token from localstorage
    const adtoken = localStorage.getItem("adtoken")||''
    // create http header
    var headers= new HttpHeaders()
    if(adtoken){
       // append token inside http headers
    headers=headers.append('access-adtoken',adtoken)
    option.headers=headers
    }
    return option 
    }
  


  //add-to-wishlist api call
  addwatchLater(film:any){
    return this.http.post('http://localhost:3000/add-to-watchLater/',film,this.appendtoken())
  }
  //get-wishlist api call
  getwatchlater(){
    return this.http.get('http://localhost:3000/watch-later')
  }

  //remove-item-wishlist/:productId api call
  removeWatchLater(movie:any){
    return this.http.delete('http://localhost:3000/remove-item-wishlist/'+movie)
  } 

  //remove-movie/:productId api call
  removeMovie(movie:any){
    return this.http.delete('http://localhost:3000/remove-movie/'+movie,this.appendtoken2())
  } 
}
