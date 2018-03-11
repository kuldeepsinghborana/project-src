import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../common/common-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-employer-management',
  templateUrl: './employer-management.component.html',
  styleUrls: ['./employer-management.component.css']
})
export class EmployerManagementComponent implements OnInit {
  public employerList : Array<object> = [];
  constructor(private commonServiceService : CommonServiceService) { 
    let self = this;
    this.commonServiceService.get('/admin/employers')
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(function (result) {
        self.employerList = result['employers'];
      });
  }
  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }

  ngOnInit() {
  }

}
