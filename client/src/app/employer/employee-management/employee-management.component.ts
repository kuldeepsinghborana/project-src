import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';
import { ToasterModule, ToasterContainerComponent, ToasterService } from '../../../../node_modules/angular5-toaster/angular5-toaster';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from '../../common/common-service.service';
import { Observable } from 'rxjs';

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
  constructor(public userService: UserService, public toasterService: ToasterService,private route: ActivatedRoute, private commonServiceService: CommonServiceService) { }

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


  public changeMatchStatus(employeeId, status, matchId){
    let url = '';
    switch(status){
      case 'invited' : url = '/matches/' + this.jobId + '/' + employeeId + '?matchStatus=invited';
        break;
      case 'delete' : url = '/matches/delete/' + matchId;
        break;
      case 'shortlisted' : url = '/matches/update/' + matchId + '?matchStatus=shortlisted'
        break;
    }
    if(url){
      console.log('robot url ', url)
      this.commonServiceService.get(url)
      .map(res => res.json())
        .catch(this.handleError)
        .subscribe(res => {
          console.info(res);
        })
    }
  }

  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }




}
