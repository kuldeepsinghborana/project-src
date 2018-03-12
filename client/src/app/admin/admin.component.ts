import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public curruntUserDetails : object = { };
  constructor(public userService:UserService) { 
    userService.getUserSettings('admin');
    userService.userDetail.subscribe(user=>{
      this.curruntUserDetails = user;
    })
  }

  ngOnInit() {
  }

}
