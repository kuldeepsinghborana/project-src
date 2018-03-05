import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { CommonServiceService } from '../../common/common-service.service';
@Injectable()
export class BuyCarrotsService {

  constructor(private http: Http, private commonServiceService: CommonServiceService) {

  }
  public clientToken() {
    return this.commonServiceService.get('/employer/payment')
      .map(res => res.json())
      .catch(this.handleError);
  }

  public checkout(data) {
    return this.commonServiceService.post('/employer/payment/checkout', data)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }
}
