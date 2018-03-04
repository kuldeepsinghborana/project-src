import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-job-overview',
  templateUrl: './job-overview.component.html',
  styleUrls: ['./job-overview.component.scss']
})
export class JobOverviewComponent implements OnInit {
  public jobCount :object = {};
  constructor(public userService:UserService) { }

  ngOnInit() {
    this.userService.getDashboardDetail("employer").subscribe(res => {
     this.jobCount = res.jobCount;
     console.log("res",this.jobCount)
    }, err => {
      console.log("err",err)
    });
  }

}
