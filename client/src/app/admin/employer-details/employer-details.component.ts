import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../common/common-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-employer-details',
  templateUrl: './employer-details.component.html',
  styleUrls: ['./employer-details.component.css']
})
export class EmployerDetailsComponent implements OnInit {
  public employerDetail : object = {
    carrots : {}
  };
  public counts : object ={};
  public employerId : string;
  public hideEmployerDetail : boolean = true;
  constructor(private commonServiceService: CommonServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.employerId = params.id);
    this.commonServiceService.get('/admin/employers/' + this.employerId)
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(res => {
        this.employerDetail = res.employer;
        this.counts = res.counts;
        this.hideEmployerDetail = false;
      });
   }
   handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }

  ngOnInit() {
  }

}
