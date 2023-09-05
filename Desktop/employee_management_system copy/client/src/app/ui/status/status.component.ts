import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/types/employee';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input() name:string =''
  @Input() employees:Employee[] = []

  constructor(private router: Router, public employeeService:EmployeeService) {}

  ngOnInit(): void {
  }

  navigatorTo() {
    this.router.navigate(['employees'])
    this.employeeService.setSelecedOption(this.name)

  }
  
}
