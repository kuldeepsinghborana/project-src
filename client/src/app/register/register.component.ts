import { Component, NgModule, OnInit } from '@angular/core';
import { ToasterModule, ToasterService } from 'angular5-toaster';
import { RegisterServiceService } from './register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  private toasterService: ToasterService;
  public username = '';
  public password = '';
  public confirmPassword = '';
  constructor(toasterService: ToasterService, private registerServiceService: RegisterServiceService) {
    this.toasterService = toasterService;


  }

  ngOnInit() {
    // let current = this;
    // setTimeout(function () {
    //   current.popToast();

    // }, 3000)
    // this.registerServiceService.getData().subscribe(res => {
    //   console.log(res, 'check')
    // })
  }

  popToast() {
    console.log("hello")
    this.toasterService.pop('success', 'Args Title', 'Args Body');
  }


  register() {
    if (this.username == '') {
      return this.toasterService.pop('error', 'Error', "Username Can't be blank");
    }

    if (this.password == '') {
      return this.toasterService.pop('error', 'Error', "Password Can't be blank");
    }

    if (this.confirmPassword == '') {
      return this.toasterService.pop('error', 'Error', "ConfirmPassword Can't be blank");
    }

    if (this.password != this.confirmPassword) {
      return this.toasterService.pop('error', 'Error', "Password and confirm password must be same");
    }

  }
}
