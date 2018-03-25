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
  public showEmployees: Boolean = false;
  public workerList = [];
  public jobDetails = {};
  constructor(public userService: UserService, public toasterService: ToasterService) { }

  ngOnInit() {
  }
  searchEmployee() {
    console.log('test');
    console.log("searchEmployee", this.jobId);
    this.showEmployees = true;
    this.userService.getWorkerProfile(this.jobId).subscribe(res => {
      this.workerList = res.workers;
      this.jobDetails = res.jobDetails;
      console.log('res', res);
    }, (err) => {
      console.log('err', err);
    });
  }
}
