import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterModule, ToasterContainerComponent, ToasterService } from '../../../../node_modules/angular5-toaster/angular5-toaster';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  public startTime
  public jobData : object;
  constructor(private userService: UserService, private route : ActivatedRoute,private router: Router, private toasterService: ToasterService) { 
    this.route.queryParams.subscribe(queryParams => {
      console.log("queryParams",queryParams)
      if(queryParams['jobId']){
       this.userService.getJobDetails(queryParams['jobId']).subscribe(res => {
         console.log("response",res)
         this.jobData = res.job;
       })
      }
    })
  }

  ngOnInit() {
  }
  deleteJobPost(id) {
    this.userService.deleteJobPost(id).subscribe(res => {
      this.router.navigate(["employer/job-management"])
      return this.toasterService.pop('success', 'Success', res.message);

    }, err => {
      console.log("err", err)
      return this.toasterService.pop('success', 'Success', err);

    });
  }
  changeJobStatus(id, status) {
    let statusChanged;
    if (status == "open") {
      statusChanged = "completed";
    }
    else {
      statusChanged = "open";
    }
    this.userService.updateJobStatus(id, statusChanged).subscribe(res => {
      this.router.navigate(["employer/job-management"])
      return this.toasterService.pop('success', 'Success', res.message);

    }, err => {
      console.log("err", err)
      return this.toasterService.pop('success', 'Success', err);

    });

  }


}
