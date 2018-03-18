import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-management',
  templateUrl: './job-management.component.html',
  styleUrls: ['./job-management.component.css']
})
export class JobManagementComponent implements OnInit {
  public jobsList = [];
  public jobs = [];
  public filter: object = {};
  public filterCount: number = 0;
  constructor(public userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getJobsDetails('employer').subscribe(res => {
      this.jobsList = res.jobs;
      console.log("res", this.jobsList)
      this.route.queryParams.subscribe(queryParams => {
        this.filter = JSON.parse(JSON.stringify(queryParams));
        this.applyFilter();
      });
    }, err => {
      console.log("err", err)
    });
  }
  toggleFilter(key, value) {
    if (key === 'jobType' && this.filter['jobIndustry']) {
      delete this.filter['jobIndustry'];
      this.filterCount--;
    }
    if (this.filter[key] === value) {
      delete this.filter[key];
      this.filterCount--;
    } else {
      if (!this.filter[key]) {
        this.filterCount++;
      }
      this.filter[key] = value;
    }
    this.applyFilter();
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
  sort(option) {
    let order = 0;
    if (option === 'Salary: Low to High') {
      order = 1;
    } else if (option === 'Salary: High to Low') {
      order = -1;
    }
    if (order === 0) {
      return this.applyFilter();
    }
    this.jobs.sort((a, b) => {
      return order * (a['salary'] - b['salary']);
    })
  }

}