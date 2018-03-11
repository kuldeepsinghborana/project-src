import { Component, OnInit, TemplateRef } from '@angular/core';
import { CreatejobService } from './createjob.service';
import { ToasterModule, ToasterContainerComponent, ToasterService } from './../../../node_modules/angular5-toaster/angular5-toaster';
import { AmazingTimePickerService } from 'amazing-time-picker'; // this line you need
import { ModalModule, Modal } from "ngx-modal";
import { LoginService } from '../login/login.service';
import { RegisterServiceService } from '../register/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})

export class CreatejobComponent implements OnInit {
  public startTime = '18:33';
  public endTime = '18:33';
  detailedJobPost: boolean = false;
  hideConfirmPassword: boolean = true;
  showSignup: boolean = false;
  showPassword: boolean = false;
  coverImage: any;
  hidePassword: boolean = true;
  showSubmit: boolean = false;
  next: boolean = true;
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
  constructor(public createJobService: CreatejobService, public toasterService: ToasterService, public atp: AmazingTimePickerService, private loginService: LoginService, public registerServiceService: RegisterServiceService,public router:Router) {
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
    this.createJobService.isEmailExist(data).subscribe(res => {
      if (res.status == 200) {
        this.showPassword = true;
        this.next = false;
        this.hidePassword = false;
        this.showSubmit = true;
        console.log("1")
      }
      else if (res.status == 201) {
        this.showPassword = true;
        this.showSignup = true;
        this.hideConfirmPassword = false;
        this.hidePassword = true;
        this.next = false;
        console.log("2")
        return this.toasterService.pop('error', 'Error', res.message);
      }
    }, err => {
      console.log("err", err)
      console.log("3")
      return this.toasterService.pop('error', 'Error', err.message);
    });
  }


  openModal(myModal) {
    if (this.user["email"] != undefined && this.user["password"] != undefined) {
      this.loginService.login(this.user).subscribe(res => {
        myModal.close();
        this.user = {};
        this.postJob(this.post)
        this.router.navigate(["/employer/overview"]);
      }, (err) => {
        console.log('err', err);
        return this.toasterService.pop('error', 'Error', err.message);
      });
    }
  }
  signUp() {
    if (this.user["email"] == '') {
      return this.toasterService.pop('error', 'Error', "Email Can't be blank");
    }
    if (this.user['password'] != this.user['Confirmpassword']) {
      return this.toasterService.pop('error', 'Error', "Password and confirm password must be same");
    }
    this.registerServiceService.register(this.user).subscribe(res => {
      this.user = {};
      this.toasterService.pop('success', 'Success', 'Registration Successfully done');
      this.router.navigate(["/employer/overview"]);
    }, err => {
      return this.toasterService.pop('error', 'Error', err.message);
    });
  }
}
