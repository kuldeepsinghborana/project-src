import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { CommonServiceService } from '../common/common-service.service';
@Injectable()
export class ActivateAccountService {

  constructor(private http: Http, private commonServiceService: CommonServiceService) {

  }

  public activateAccount(token) {
    return this.commonServiceService.get('/users/accountactivate/' + token)
      .map(res => res.json())
      .catch(this.handleError);
  }


  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }
}
