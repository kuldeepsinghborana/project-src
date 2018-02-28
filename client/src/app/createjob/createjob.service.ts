import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonServiceService } from '../common/common-service.service';
import { Observable } from 'rxjs';

@Injectable()
export class CreatejobService {

  constructor(private http: Http, private commonServiceService: CommonServiceService) {

  }
  register(data) {
    return this.commonServiceService.post('/jobs',data)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);

  }
}
