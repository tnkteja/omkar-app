import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employee:any = {
  }
  id:any;
  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
    this.id=+this.route.snapshot.paramMap.get('id');
    this.getEmployee();
  }

  getEmployee(){
    this.http.get(`http://localhost:3000/employee/${this.id}`)
      .subscribe(
        res => {
          this.employee=res;
          this.employee.skills = this.employee.skills.map( map => "Skill "+map)
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}
