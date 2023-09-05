import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './pages/dash/dash.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {path:'',component: DashComponent},
  {path:'employees',component: EmployeesComponent},
  {path:'employee/:id',component: EmployeeDetailsComponent},
  {path:'404',component: NotfoundComponent},
  {path:'**', redirectTo:'404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
