import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'omkar-app';
  employee ={}

  constructor(private http: HttpClient) { 
  }

  
  
  postEmployee() {
    console.log(this.employee)
    this.http.post('http://localhost:3000/employee', this.employee)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}
