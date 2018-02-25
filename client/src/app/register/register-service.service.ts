import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http,Response } from '@angular/http';
import { CommonServiceService } from '../common/common-service.service';

@Injectable()
export class RegisterServiceService {

  constructor(private http: Http, private commonServiceService: CommonServiceService) {

  }
  getData() {
    console.log('in register')
    return this.commonServiceService.get('user/cap/abba')
      .map(res => res.json())
      .catch(this.handleError);
  }
  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);

  }
}
