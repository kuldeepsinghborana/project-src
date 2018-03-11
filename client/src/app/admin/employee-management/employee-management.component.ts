import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonServiceService } from '../../common/common-service.service';


@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  public employeeList : Array<object> =[];
  constructor(private commonServiceService: CommonServiceService) { 
    let self = this;
    this.commonServiceService.get('/admin/employee')
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(function (result) {
        self.employeeList = result['employees'];
      });
  }
  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }

  ngOnInit() {
  }

}
