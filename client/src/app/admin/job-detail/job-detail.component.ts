import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from '../../common/common-service.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  public jobId: string;
  public job: object = {};
  public moment: any;
  constructor(private route: ActivatedRoute, private commonServiceService: CommonServiceService) {
    let self = this;
    this.route.params.subscribe(params => self.jobId = params.id);
    this.commonServiceService.get('/admin/jobs/'+self.jobId)
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(function (result) {
        self.job = result['job'];
      });
  }

  ngOnInit() {
  }

  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }
}
