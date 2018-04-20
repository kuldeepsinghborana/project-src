import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../common/common-service.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
public employersList : object = {};
  constructor(private commonServiceService: CommonServiceService) {
    this.commonServiceService.get('admin/employers')
    .subscribe(res =>{
      this.employersList = res.employers;
      console.log(res)
    });
  }

  ngOnInit() {
  }

}
