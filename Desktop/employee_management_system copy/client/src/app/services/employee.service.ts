import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../mock.data';
import { Employee } from '../types/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = EMPLOYEES

  selectedOption: string = 'ALL'

  constructor() { }

  // returns list of all employees
  getAllEmployees(): Employee[] {
    return this.employees;
  }

  // returns all male employees
  getMaleEmployees(): Employee[] {
    return this.employees.filter((employee) => employee.gender == 'male');
  }

  // returns all female employees
  getFemaleEmployees(): Employee[] {
    return this.employees.filter((employee) => employee.gender == 'female');
  }

  setSelecedOption(optionName: string) {
    this.selectedOption = optionName; 
  
  }
  }

