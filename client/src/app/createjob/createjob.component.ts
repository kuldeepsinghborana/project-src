import { Component, OnInit, TemplateRef } from '@angular/core';
import { CreatejobService } from './createjob.service';
import { ToasterModule, ToasterContainerComponent, ToasterService } from './../../../node_modules/angular5-toaster/angular5-toaster';
import { AmazingTimePickerService } from 'amazing-time-picker'; // this line you need
import { ModalModule, Modal } from "ngx-modal";
import { LoginService } from '../login/login.service';




@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})

export class CreatejobComponent implements OnInit {
  public startTime = '18:33';
  public endTime = '18:33';
  detailedJobPost: boolean = false;
  coverImage: any;
  hidePassword: boolean = true;
  showSubmit: boolean = false;

  email: any;
  user = {};
  post = {
    jobTitle: "",
    jobType: "",
    jobIndustry: "",
    salaryType: "",
    salary: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    totalHours: "",
    jobExpiration: "",
    requiredNumber: "",
    workPeriod: "",
    workRegion: "",
    location: "",
    description: "",
    jobRole: "",
    requirement: "",
    selfEmployer: "",
    companyName: "",
    companyWebsite: "",
    employerName: "",
    employerEmail: "",
    employerPhone: "",
    coverImage: "",
    featuredImages: "",
    employerId: "",
    jobStatus: "",
    matches: ""


  };
  constructor(public createJobService: CreatejobService, public toasterService: ToasterService, public atp: AmazingTimePickerService, private loginService: LoginService) {
    this.toasterService = toasterService;
  }

  ngOnInit() {

  }
  postJob(data) {
    console.log("hello", data.startTime)
    let form = new FormData();
    form.append("jobTitle", data.jobTitle)
    form.append("jobType", data.jobType)
    form.append("jobIndustry", data.jobIndustry)
    form.append("salaryType", data.salaryType)
    form.append("salary", data.salary)
    form.append("startDate", data.startDate)
    form.append("startTime", this.startTime)
    form.append("endTime", this.endTime)
    form.append("endDate", data.endDate)
    form.append("totalHours", data.totalHours)
    form.append("jobExpiration", data.jobExpiration)
    form.append("requiredNumber", data.requiredNumber)
    form.append("workPeriod", data.workPeriod)
    form.append("workRegion", data.workRegion)
    form.append("location", data.location)
    form.append("description", data.description)
    form.append("jobRole", data.jobRole)
    form.append("requirement", data.requirement)
    form.append("selfEmployer", data.selfEmployer)
    form.append("companyName", data.companyName)
    form.append("companyWebsite", data.companyWebsite)
    form.append("employerName", data.employerName)
    form.append("employerEmail", data.employerEmail)
    form.append("employerPhone", data.employerPhone)
    form.append("employerId", data.employerId)
    form.append("jobStatus", data.jobStatus)
    form.append("matches", data.matches)
    form.append("coverImage", this.coverImage)
    this.createJobService.register(form).subscribe(res => {
      return this.toasterService.pop('success', 'Success', 'Registration Successfully done');
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
  emailVerify() {
    let emailId = this.user["email"];
    let data = {
      email: emailId
    }
    console.log("data",data)
    this.createJobService.isEmailExist(data).subscribe(res => {
      if (res.status == 200) {
        console.log("i am here")
        this.hidePassword = false;
        this.showSubmit = true;
      }
      else if(res.status == 201){
        return this.toasterService.pop('error', 'Error', res.message);
      }
    }, err => {
      console.log("err",err)
      return this.toasterService.pop('error', 'Error', err.message);
    });
  }


  openModal(myModal) {
    console.log("this.emal", this.user["email"])
    console.log("this.password", this.user["password"])
    if (this.user["email"] != undefined && this.user["password"] != undefined) {
      this.loginService.login(this.user).subscribe(res => {
        myModal.close();
        this.user = {};
        return this.toasterService.pop('success', 'Success', 'You post is successfuly registered');
        
      }, (err) => {
        console.log('err', err);
        return this.toasterService.pop('error', 'Error', err.message);
      });
    }
  }
}
