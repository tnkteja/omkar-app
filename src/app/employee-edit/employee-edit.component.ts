import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  employee:any ={}
  skills:any=[
    {id:1,checked:false},
    {id:2,checked:false},
    {id:3,checked:false},
    {id:4,checked:false},
    {id:5,checked:false},
    {id:6,checked:false},
    {id:7,checked:false},
    {id:8,checked:false},
    {id:9,checked:false},
    {id:10,checked:false},
  ]
  error:any;
id:any;
  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { 
  }

  ngOnInit(){
    this.id =+this.route.snapshot.paramMap.get('id')
    if(this.id)
    this.getEmployee()
  }
  
  putEmployee() {
    console.log(this.employee)
    var skills = [];
    this.skills.map( record => {
      if(record.checked){
        skills.push(record.id);
      }
    })
    this.employee.skills = skills;
    console.log(this.employee.skills);
    console.log(this.skills)
    this.http.put(environment.baseUrl+'/employee/', this.employee)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  getEmployee(){
    this.http.get(environment.baseUrl+`/employee/${this.id}`)
      .subscribe(
        res => {
          this.employee=res;
          this.employee.dob=this.employee.dob.slice(0,10)
          this.employee.skills.map(record => {
            this.skills[+record - 1].checked = true;
          })
          console.log(res);
        },
        err => {
          this.router.navigate(["/employee"]);
          console.log("Error occured");
        }
      );
  }

  postEmployee() {
    console.log(this.employee)
    var skills = [];
    this.skills.map( record => {
      if(record.checked){
        skills.push(record.id);
      }
    })
    this.employee.skills = skills;
    this.http.post(environment.baseUrl+'/employee', this.employee)
      .subscribe(
        res => {
          console.log(res);
          this.error = undefined;
          this.employee={}
        },
        err => {
          console.log("Error occured", err);
          this.error = err.error;
        }
      );
  }

  deleteEmployee(){
    this.http.delete(environment.baseUrl+'/employee/'+this.id)
.subscribe( res => {
  console.log(res,"now")
  this.router.navigate(['/employee']);
}, err => {
  console.log(err)
})  }

}
