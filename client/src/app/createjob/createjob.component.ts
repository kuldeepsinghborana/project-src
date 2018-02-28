import { Component, OnInit } from '@angular/core';
import { CreatejobService } from './createjob.service';
import { ToasterModule, ToasterContainerComponent, ToasterService } from './../../../node_modules/angular5-toaster/angular5-toaster';
@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent implements OnInit {
  post = {
    jobTitle: "",
    jobType: "",
    jobIndustry: "",
    salaryType: "",
    salary: "",
    startDate:"",
    endDate:"",
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
    selfEmployer:"",
    companyName: "",
    companyWebsite: "",
    employerName: "",
    employerEmail: "",
    employerPhone: "",
    coverImage: "",
    featuredImages:"",
    employerId: "",
    jobStatus:"",
    matches:""   
    
  };
  constructor(public createJobService:CreatejobService,public toasterService:ToasterService) { 
    this.toasterService = toasterService;
  }

  ngOnInit() {
  }
  postJob(data) {
    let form = new FormData();
    form.append("jobTitle",data.jobTitle)
    form.append("jobType",data.jobType)
    form.append("jobIndustry",data.jobIndustry)
    form.append("salaryType",data.salaryType)
    form.append("salary",data.salary)
    form.append("startDate",data.startDate)
    form.append("endDate",data.endDate)
    form.append("totalHours",data.totalHours)
    form.append("jobExpiration",data.jobExpiration)
    form.append("requiredNumber",data.requiredNumber)
    form.append("workPeriod",data.workPeriod)
    form.append("workRegion",data.workRegion)
    form.append("location",data.location)
    form.append("description",data.description)
    form.append("jobRole",data.jobRole)
    form.append("requirement",data.requirement)
    form.append("selfEmployer",data.selfEmployer)
    form.append("companyName",data.companyName)
    form.append("companyWebsite",data.companyWebsite)
    form.append("employerName",data.employerName)
    form.append("employerEmail",data.employerEmail)
    form.append("employerPhone",data.employerPhone)
    form.append("employerId",data.employerId)
    form.append("jobStatus",data.jobStatus)
    form.append("matches",data.matches)
    
    
       
    this.createJobService.register(form).subscribe(res => {
    return this.toasterService.pop('success', 'Success', 'Registration Successfully done');
    }, err => {
      return this.toasterService.pop('error', 'Error', err.message);
    });
  }
}
