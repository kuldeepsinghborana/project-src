import { Component, NgModule, OnInit } from '@angular/core';
import { ToasterModule, ToasterContainerComponent, ToasterService } from './../../../node_modules/angular5-toaster/angular5-toaster';
import { RegisterServiceService } from './register-service.service';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  private toasterService: ToasterService;
  public email = '';
  public password = '';
  public confirmPassword = '';
  public name = '';
  public companyname = '';
  public handphoneNumber = '';
  public referenceNumber = '';
  constructor(toasterService: ToasterService, private registerServiceService: RegisterServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.toasterService = toasterService;
  }

  ngOnInit() {



    this.activatedRoute.params.subscribe((params: Params) => {
      this.referenceNumber = params['referenceNumber'];
      console.log('this.referenceNumber', this.referenceNumber);
    });

  }

  public popToast() {
    console.log("hello")
    this.toasterService.pop('success', 'Args Title', 'Args Body');
  }


  public register() {
    if (this.email == '') {
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
    if (this.companyname == '') {
      return this.toasterService.pop('error', 'Error', "Company name Can't be blank");
    }
    if (this.handphoneNumber == '') {
      return this.toasterService.pop('error', 'Error', "Handphone Number Can't be blank");
    }
    if (this.name == '') {
      return this.toasterService.pop('error', 'Error', "Name Can't be blank");
    }

    if (this.referenceNumber.length != 6 && this.referenceNumber.length != 0) {
      return this.toasterService.pop('error', 'Error', "Invalid Reference Number");
    }

    let data = {
      email: this.email,
      password: this.password,
      handphoneNumber: this.handphoneNumber,
      companyname: this.companyname,
      name: this.name
    }
    if (this.referenceNumber != '' && this.referenceNumber != undefined) {
      data['referenceNumber'] = this.referenceNumber;
    }
    this.registerServiceService.register(data).subscribe(res => {
      this.email = '';
      this.name = '';
      this.handphoneNumber = '';
      this.companyname = '';
      this.confirmPassword = '';
      this.password = '';
      this.toasterService.pop('success', 'Success', 'Registration Successfully done');

      return this.router.navigate(["/employer/overview"]);

    }, err => {
      return this.toasterService.pop('error', 'Error', err.message);
    });

  }
}
