import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalModule, Modal } from "ngx-modal";
import { UserService } from '../../user-service.service';
import { ToasterService } from 'angular5-toaster/angular5-toaster';

@Component({
  selector: 'app-farm-carrots',
  templateUrl: './farm-carrots.component.html',
  styleUrls: ['./farm-carrots.component.css']
})
export class FarmCarrotsComponent implements OnInit {
  email = '';
  public sendGiftForm = false;

  constructor(public userService: UserService, public toasterService: ToasterService, ) {
  }

  ngOnInit() {
  }
  sendGift() {
    console.log('sendGift');
    this.sendGiftForm = true;
  }
  inviteSubmit() {
    // console.log('email', this.email);
    let isEmail = new RegExp(/\S+@\S+\.\S+/);

    let email = this.email;

    let emailIsValid = isEmail.test(this.email);
    if (this.email === '' || this.email === undefined || !emailIsValid) {
      return this.toasterService.pop('error', "Error", "Please enter correct email address");
    }



    let data = {
      email: this.email
    }
    this.userService.sendInvite(data).subscribe(res => {
      console.log('res', res);
      this.email = '';
      this.toasterService.pop('success', 'SUCCESS', 'Invitation Sent Successfully');
      this.sendGiftForm = false;

    }, (err) => {
      console.log('err', err);
    });
  }

}
