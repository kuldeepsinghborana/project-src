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
  public getJobDetails(userType : string) {
    return this.commonServiceService.get('/'+userType+'/jobs' )
      .map(res => res.json())
      .catch(this.handleError);
  }
  public getUserSettings(userType : string){
    return this.commonServiceService.get('/'+userType+'/settings')
    .map(res => res.json())
    .catch(this.handleError);
  }

  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }
}
