import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private router:Router){}
// logout
logout(){
  localStorage.removeItem("token")
 
  localStorage.removeItem("email")

  // navigate
  this.router.navigateByUrl('Click-On/login')
}

// Adlogout
Adlogout(){
  localStorage.removeItem("adtoken")
  // navigate
  this.router.navigateByUrl('Click-On/Admin-login')
}

}
