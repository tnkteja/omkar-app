import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees:any= [{
    name:"hello",
    id:"hi"
  }]
  currentPage:any=1;
  lastPage:any;
  perpage:any=2;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.getEmployees()
  }

  getEmployees() {
    var queryString=`?current_page=${this.currentPage}&perpage=${this.perpage}`
    this.http.get('http://localhost:3000/employee'+queryString)
      .subscribe(
        res => {
          this.employees=res.data;
          this.currentPage = res.current_page;
          this.lastPage = res.last_page;
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
  next() {
    this.currentPage+=1
    this.getEmployees()
  }
  previous() {
    this.currentPage-=1;
    this.getEmployees()
  }

  delete(id) {
    this.http.delete('http://localhost:3000/employee/'+id)
    .subscribe( res => {
      console.log(res,"now")
      window.location.reload()
    }, err => {
      console.log(err)
    })
  }
}
