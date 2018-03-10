import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  public curruntUserDetails : object = {};
  public file : File;
  constructor(public userService:UserService) { 
    userService.userDetail.subscribe(user=>{
      this.curruntUserDetails = Object.assign({},user);
    })
  }

  public fileSelected($event){
    this.file = $event.target.files[0];
  }

  public saveAccountSettings(curruntUserDetails){
    let payload = new FormData();
    for(let property in curruntUserDetails){
      payload.append(property, curruntUserDetails[property]);
    }
    payload.append('profilePic', this.file, this.file['name'])
    this.userService.saveProfile(payload, 'employer').subscribe(res =>{
      console.log('robot ',res);
    });
  }

  ngOnInit() {
  }

}
