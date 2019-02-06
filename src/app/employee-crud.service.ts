import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
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
