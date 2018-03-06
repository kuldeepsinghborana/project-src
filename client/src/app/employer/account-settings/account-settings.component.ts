import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  public curruntUserDetails : object = {};
  constructor(public userService:UserService) { 
    userService.getUserSettings('employer').subscribe(res=>{
      this.curruntUserDetails = res.user;
    })
  }

  ngOnInit() {
  }

}
