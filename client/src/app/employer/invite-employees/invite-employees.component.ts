import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from '../../common/common-service.service';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invite-employees',
  templateUrl: './invite-employees.component.html',
  styleUrls: ['./invite-employees.component.css']
})
@NgModule({
  imports: [
    CommonModule
  ],
})
export class InviteEmployeesComponent implements OnInit {
  public jobId: string;
  public employeesList: Array<object> = [];
  public job: object = {};
  constructor(private route: ActivatedRoute, private commonServiceService: CommonServiceService) {
    this.route.params.subscribe(params => this.jobId = params.jobId);
    let self = this;
    if (this.jobId) {
      this.commonServiceService.get('/employer/employees/invite/' + this.jobId)
        .map(res => res.json())
        .catch(this.handleError)
        .subscribe(function (res) {
          console.log(res);
          if (res) {
            if (res['workers']) {
              self.employeesList = res['workers'];
            }
            if (res['job']) {
              self.job = res['job'];
            }
          }

        });
    }
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

  ngOnInit() {
  }

}
