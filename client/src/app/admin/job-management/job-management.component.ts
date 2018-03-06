import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../common/common-service.service';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-job-management',
  templateUrl: './job-management.component.html',
  styleUrls: ['./job-management.component.css']
})
export class JobManagementComponent implements OnInit {
  public jobs : Array<object> = [];
  public moment : any;
  constructor(private commonServiceService: CommonServiceService) { 
    let self = this;
      this.commonServiceService.get('/admin/jobs/')
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(function(result){
        self.jobs = result['jobs'];
      });
  }
  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }

  ngOnInit() {
  }

}
