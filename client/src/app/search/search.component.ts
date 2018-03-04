import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonServiceService } from '../common/common-service.service';
import * as moment from 'moment';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public jobsList: Array<object>;
  public jobs: Array<object>;
  public query: string;
  public hideSearch: boolean = false;
  private router: Router;
  public filter: object = {};
  public filterCount: number = 0;
  public toggleFilterOptions: boolean = false;
  public moment :any;
  public sortOption : string = '';
  constructor(private commonServiceService: CommonServiceService, private Router: Router) {
    this.router = Router;
    this.moment = moment;
  }

  ngOnInit() {
  }
  search() {
    let self = this;
    this.commonServiceService.get('/search?query=' + this.query)
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(function (jobs) {
        self.jobsList = jobs;
        self.applyFilter();
        self.hideSearch = true;
        localStorage.setItem('searchedJobs', JSON.stringify(jobs));
      });
  }
  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }
  toggleFilter(key, value) {
    if(key === 'jobType' && this.filter['jobIndustry']){
      delete this.filter['jobIndustry'];
      this.filterCount--;
    }
    if (this.filter[key] === value) {
      delete this.filter[key];
      this.filterCount--;
    } else {
      if(!this.filter[key]){
        this.filterCount++;        
      }
      this.filter[key] = value;
    }    
    this.applyFilter();
  }
  jobDetail(data) {
    this.router.navigate(['homepage/job', data._id])
  }
  private applyFilter() {
    var self = this;
    if (Object.keys(this.filter).length === 0) {
      self.jobs = Object.assign([], this.jobsList);
      return;
    }
    this.jobs = this.jobsList.filter(function (job) {
      for (var key in self.filter) {
        if (self.filter[key] !== job[key]) {
          return false
        }
      }
      return true;
    })
  }
  clearFilter() {
    this.filter = {};
    this.filterCount = 0;
    this.jobs = Object.assign([], this.jobsList);
  }
  sort(option){
    let order = 0;
    if(option === 'Salary: Low to High'){
      order = 1;
    } else if(option === 'Salary: High to Low'){
      order = -1;
    }
    if(order === 0){
      return this.applyFilter();
    }
    this.jobs.sort((a,b)=>{
      return order*(a['salary'] - b['salary']);
    })
  }
}
