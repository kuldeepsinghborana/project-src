import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http, Response } from '@angular/http';
import { CommonServiceService } from './common/common-service.service';
@Injectable()
export class UserService {
  public userDetail = new BehaviorSubject({});
  constructor(private http: Http, private commonServiceService: CommonServiceService) {
  }
  public getDashboardDetail(userType : string) {
    return this.commonServiceService.get('/'+userType )
      .map(res => res.json())
      .catch(this.handleError)
  }
  public getJobDetails(userType : string) {
    return this.commonServiceService.get('/'+userType+'/jobs' )
      .map(res => res.json())
      .catch(this.handleError);
  }
  public updateJobPost(jobId,data) {
    return this.commonServiceService.post('/jobs/update/' + jobId,data)
      .map(res => res.json())
      .catch(this.handleError);
  }
  public getUserSettings(userType : string){
    return this.commonServiceService.get('/'+userType+'/settings')
    .map(res => res.json())
    .catch(this.handleError)
    .subscribe(res => {
      this.userDetail.next(res['user']);
    });
  }
  public saveProfile(payload, userType:string){
    return this.commonServiceService.post('/users/update', payload)
    .map(res => {
      this.getUserSettings(userType);
      return res.json()
    })
    .catch(this.handleError);
  }

  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }
}
