import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  UserName : String = "Admin";
  constructor(public serviceEmployee: EmployeeService) { }

  ngOnInit(): void {
    this.UserName = this.serviceEmployee.UserName.FirstName;
  }
  

}
