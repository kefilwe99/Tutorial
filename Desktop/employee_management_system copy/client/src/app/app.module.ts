import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './pages/dash/dash.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HeaderComponent } from './ui/header/header.component';
import { StatusComponent } from './ui/status/status.component';
import { AddEmployeeComponent } from './ui/add-employee/add-employee.component';
import { TableComponent } from './ui/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    NotfoundComponent,
    HeaderComponent,
    StatusComponent,
    AddEmployeeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
