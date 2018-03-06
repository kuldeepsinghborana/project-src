import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { CommonServiceService } from './common/common-service.service';
@Injectable()
export class UserService {

  constructor(private http: Http, private commonServiceService: CommonServiceService) {

  }

  public getDashboardDetail(userType : string) {
    return this.commonServiceService.get('/'+userType )
      .map(res => res.json())
      .catch(this.handleError);
  }
  public getUserJobDetails() {
    return this.commonServiceService.get('/employer/jobs' )
      .map(res => res.json())
      .catch(this.handleError);
  }
  public updateJobPost(jobId,data) {
    return this.commonServiceService.post('/jobs/update/' + jobId,data)
      .map(res => res.json())
      .catch(this.handleError);
  }
  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }
}
