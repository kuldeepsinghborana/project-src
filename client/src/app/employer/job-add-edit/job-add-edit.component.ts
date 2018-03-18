import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterModule, ToasterContainerComponent, ToasterService } from '../../../../node_modules/angular5-toaster/angular5-toaster';
import { AmazingTimePickerService } from 'amazing-time-picker'; // this line you need
import { CreatejobService } from '../../createjob/createjob.service';

@Component({
  selector: 'app-job-add-edit',
  templateUrl: './job-add-edit.component.html',
  styleUrls: ['./job-add-edit.component.css']
})
export class JobAddEditComponent implements OnInit {
  public jobTitle;
  public requiredNumber;
  public jobType;
  public jobIndustry;
  public salaryType;
  public salary;
  public startDate;
  public endDate;
  public workPeriod;
  public totalHours;
  public jobExpiration;
  public location;
  public workRegion;
  public description;
  public jobRole;
  public requirement;
  public selfEmployer;
  public companyName;
  public companyWebsite;
  public employerName;
  public employerPhone;
  public startTime;
  public endTime;
  public coverImage;
  public companyImage;
  public userId: any;
  public jobData = {};
  detailedJobPost: boolean = false
  typeEdit:boolean = false
  
  constructor(public userService: UserService,public createJobService: CreatejobService, private route: ActivatedRoute, public router: Router, public atp: AmazingTimePickerService, public toasterService: ToasterService) {
    this.route.queryParams.subscribe((params) => {
      this.userId = params['id'];
      if (this.userId) {
        this.userService.getEmployerDetails(this.userId).subscribe(res => {
          this.jobData = res.job;
          this.setValues(this.jobData);

        }, err => {
          console.log("err", err)
        });
      }
      else{
        this.typeEdit = true;
      }
    });



  }

  ngOnInit() {
  }
  saveJobPost(){
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
    if(this.coverImage != undefined){
    form.append("coverImage", this.coverImage)
      
    }
    this.createJobService.register(form).subscribe(res => {
      this.toasterService.pop('success', 'Success', 'Jobpost Successfully done');
      return this.router.navigate(["employer/job-management"])
    }, err => {
      return this.toasterService.pop('error', 'Error', err.message);
    });
  }
  setValues(jobData) {
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
  updateJobPost() {
    console.log("cover image", this.coverImage)
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
    if(this.coverImage != undefined){
    form.append("coverImage", this.coverImage)
      
    }
    this.userService.updateJobPost(this.jobData["_id"], form).subscribe(res => {
      this.toasterService.pop('success', 'Success', 'Updated Successfully done');
      return this.router.navigate(["employer/job-management"])
    }, err => {
      return this.toasterService.pop('error', 'Error', err.message);
    });
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
  readFileCompany(event) {
    this.companyImage = event.target.value;
    console.log("companyImage", this.companyImage)
  }
}
