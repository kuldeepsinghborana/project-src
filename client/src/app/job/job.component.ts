import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonServiceService } from '../common/common-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  public jobId : string;
  public job : object;
  public moment : any;
  constructor(private route: ActivatedRoute, private commonServiceService: CommonServiceService) {
    this.moment = moment;
    this.route.params.subscribe( params => this.jobId = params.id );
    let jobs : Array<object> = JSON.parse(localStorage.getItem('searchedJobs')||'[]');
    let foundJob = jobs.filter(jobObject =>  jobObject['_id'] === this.jobId);
    if(!foundJob || !foundJob[0]){
      let self = this;
      this.commonServiceService.get('api/jobs/:jobId',{jobId : this.jobId})
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(function(job){
        this.job = job;
      });
    } else{
      this.job = foundJob[0];
    }
  }

  ngOnInit() {
  }

  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }

}
