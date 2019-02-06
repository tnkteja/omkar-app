import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  {path: '', component: EmployeeEditComponent},
  {path: 'employee', component: EmployeeComponent},
{path: 'employee/:id', component: EmployeeDetailComponent},
{path: 'employee/:id/edit', component: EmployeeEditComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
