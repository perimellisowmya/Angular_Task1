import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data:any
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe(
      (response:any) => {
        this.data = response;
        console.log(response)
      },
      (error:any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  }


