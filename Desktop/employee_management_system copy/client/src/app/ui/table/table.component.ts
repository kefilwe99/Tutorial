import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/types/employee';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  employees: Employee[] = []

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    if (this.employeeService.selectedOption == 'MALE') {
      this.employees = this.employeeService.getMaleEmployees()
    } else if (this.employeeService.selectedOption == 'FEMALE') {
      this.employees = this.employeeService.getFemaleEmployees()
    } else {
      this.employees = this.employeeService.getAllEmployees()
    }

    console.log(this.employees);
  }

}
