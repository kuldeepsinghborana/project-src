import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  public employee: Array<object>;
  constructor(public userService:UserService) { }

  ngOnInit() {
    this.userService.getDashboardDetail("employer").subscribe(res => {
      console.log("res",res)
    }, err => {
      console.log("err",err)
    });
  }

}
