import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { AmazingTimePickerService } from 'amazing-time-picker'; // this line you need
import { ToasterModule, ToasterContainerComponent, ToasterService } from '../../../../node_modules/angular5-toaster/angular5-toaster';

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
  public jobData = {};
  public editJobPost: boolean = false;
  public viewJob: boolean = false;
  public jobListing: boolean = true;
  public jobTitle = '';
  public requiredNumber = '';
  public jobType = '';
  public jobIndustry = '';
  public salaryType = '';
  public salary = '';
  public startDate = '';
  public endDate = '';
  public workPeriod = '';
  public totalHours = '';
  public jobExpiration = '';
  public location = '';
  public workRegion = '';
  public description = '';
  public jobRole = '';
  public requirement = '';
  public selfEmployer = '';
  public companyName = '';
  public companyWebsite = '';
  public employerName = '';
  public employerPhone = '';
  public startTime = '';
  public endTime = '';
  public coverImage = '';
  
  

  constructor(public userService: UserService, private route: ActivatedRoute, public atp: AmazingTimePickerService,public toasterService: ToasterService) { }

  ngOnInit() {
    this.userService.getUserJobDetails().subscribe(res => {
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
  rowSelect(rowData) {
    console.log("rowData", rowData)
    this.jobListing = false;
    this.viewJob = true;
    this.jobData = rowData;
  }
  showEdit() {
    console.log("hello", this.jobData)
    this.jobListing = false;
    this.viewJob = false;
    this.editJobPost = true;
    this.jobTitle = this.jobData["jobTitle"];
    this.requiredNumber = this.jobData["requiredNumber"];
    this.jobType = this.jobData["jobType"];
    this.jobIndustry = this.jobData["jobIndustry"];
    this.salaryType = this.jobData["salaryType"];
    this.salary = this.jobData["salary"];
    this.startDate = this.jobData["startDate"];
    this.endDate = this.jobData["endDate"];
    this.workPeriod = this.jobData["workPeriod"];
    this.totalHours = this.jobData["totalHours"];
    this.jobExpiration = this.jobData["jobExpiration"];
    this.location = this.jobData["location"];
    this.workRegion = this.jobData["workRegion"];
    this.description = this.jobData["description"];
    this.jobRole = this.jobData["jobRole"];
    this.requirement = this.jobData["requirement"];
    this.selfEmployer = this.jobData["selfEmployer"];
    this.companyName = this.jobData["companyName"];
    this.companyWebsite = this.jobData["companyWebsite"];
    this.employerName = this.jobData["employerName"];
    this.employerPhone = this.jobData["employerPhone"];
    this.startTime = this.jobData["startTime"];
    this.endTime = this.jobData["endTime"];
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
  openstartTime() {
    console.log("asdasd")
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      this.startTime = time;

    });
  }
  openendTime() {
    const amazingTimePickers = this.atp.open();
    amazingTimePickers.afterClose().subscribe(time => {
      this.endTime = time;

    });
  }
  readFile(event) {
    this.coverImage = event.target.value;
  }
  updateJobPost(){
    console.log("cover image",this.coverImage)
    let form = new FormData();
    form.append("jobTitle", this.jobTitle)
    form.append("jobType", this.jobType)
    form.append("jobIndustry", this.jobIndustry)
    form.append("salaryType", this.salaryType)
    form.append("salary", this.salary)
    form.append("startDate", this.startDate)
    form.append("startTime", this.startTime)
    form.append("endTime", this.endTime)
    form.append("endDate", this.endDate)
    form.append("totalHours", this.totalHours)
    form.append("jobExpiration", this.jobExpiration)
    form.append("requiredNumber", this.requiredNumber)
    form.append("workPeriod", this.workPeriod)
    form.append("workRegion", this.workRegion)
    form.append("location", this.location)
    form.append("description", this.description)
    form.append("jobRole", this.jobRole)
    form.append("requirement", this.requirement)
    form.append("selfEmployer", this.selfEmployer)
    form.append("companyName", this.companyName)
    form.append("companyWebsite", this.companyWebsite)
    form.append("employerName", this.employerName)
    form.append("employerPhone", this.employerPhone)
   form.append("coverImage", this.coverImage)
    this.userService.updateJobPost(this.jobData["_id"],form).subscribe(res => {
      return this.toasterService.pop('success', 'Success', 'Updated Successfully done');
    }, err => {
      return this.toasterService.pop('error', 'Error', err.message);
    }); 
  }
}
