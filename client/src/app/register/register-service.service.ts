import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { CommonServiceService } from '../common/common-service.service';

@Injectable()
export class RegisterServiceService {

  constructor(private http: Http, private commonServiceService: CommonServiceService) {

  }
  public getData() {
    console.log('in register')
    return this.commonServiceService.get('user/cap/abba')
      .map(res => res.json())
      .catch(this.handleError);
  }

  public register(data) {
    return this.commonServiceService.post('/users/register',data)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);

  }
}
