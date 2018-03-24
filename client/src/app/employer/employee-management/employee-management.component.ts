import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';
import { ToasterModule, ToasterContainerComponent, ToasterService } from '../../../../node_modules/angular5-toaster/angular5-toaster';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  jobId: any;
  constructor(public userService: UserService,public toasterService: ToasterService) { }

  ngOnInit() {
  }
  searchEmployee(){
    console.log("searchEmployee",this.jobId)
  }
}
