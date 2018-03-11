import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../common/common-service.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeDetails : object = { };
  public counts : object ={};
  public employeeId : string;
  public hideEmployeeDetail : boolean = true;
  constructor(private commonServiceService: CommonServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.employeeId = params.id);
    this.commonServiceService.get('/admin/employees/' + this.employeeId)
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(res => {
        this.employeeDetails = res.employee;
        // this.counts = res.counts;
        // this.hideEmployeeDetail = false;
      });
   }
   handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }

  ngOnInit() {
  }

}
