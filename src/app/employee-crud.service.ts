import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Actually did not use angular seervices. instead defined methods in the components itself. We can move them here.
export class EmployeeCRUDService {

  constructor(private http: HttpClient) { }

  postEmployee(obj) {
    
  }

  async getEmployees() {
    this.http.get('http://localhost:3000/employee')
      .subscribe(
        res => {
          res;
          console.log(res);
        },
        err => {
          console.log("Error occured", err);
        }
      );
  }
}
