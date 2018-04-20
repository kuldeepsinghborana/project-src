import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  public curruntUserDetails : object = {};
  constructor(public userService:UserService) { 
    userService.getUserSettings('employer');
    userService.userDetail.subscribe(user=>{
      this.curruntUserDetails = user;
    })
  }

  ngOnInit() {
    
  }

}
