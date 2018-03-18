import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  public jobId : string;
  public employee : object = {};
  constructor(private route : ActivatedRoute, private userService : UserService) {
    const self = this;
    this.route.queryParams.subscribe(queryParams => {
      if(queryParams.jobId){
        self.jobId = queryParams.jobId;
      }
    })
    this.route.params.subscribe(params => {
      // self.userService.getEmployeeDetails(params.id)
      // .map(res => res.json())
      // .catch
    })
  }

  ngOnInit() {
  }

}
