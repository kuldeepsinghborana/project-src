import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from '../../common/common-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-invite-employees',
  templateUrl: './invite-employees.component.html',
  styleUrls: ['./invite-employees.component.css']
})
export class InviteEmployeesComponent implements OnInit {
  private jobId : string;
  public employeesList : Array<object> = [];
  constructor(private route: ActivatedRoute, private commonServiceService: CommonServiceService) {
    this.route.params.subscribe( params => this.jobId = params.jobId );
      let self = this;
      if(this.jobId){
      this.commonServiceService.get('/employer/employees/invite/'+this.jobId)
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(function(res){
        console.log(res);
        this.employeesList = res['workers'];
      });
    }
  }

  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }

  ngOnInit() {
  }

}
