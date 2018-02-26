import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  postJob(data) {
    console.log('data', data);
  }
}
