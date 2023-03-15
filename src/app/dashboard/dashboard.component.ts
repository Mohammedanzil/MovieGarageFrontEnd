import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allfilm: any = []
  constructor(private api: ApiService) {
  }
  ngOnInit(): void {
    this.api.allmovies()
      .subscribe(
        (result: any) => {

          this.allfilm = result.allfilm
          console.log(this.allfilm);
        }

      )
  }

}
