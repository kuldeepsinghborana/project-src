import { Component, OnInit } from '@angular/core';
// import { ToasterModule, ToasterContainerComponent, ToasterService } from './../../../node_modules/angular5-toaster/angular5-toaster';
import { ToasterModule, ToasterService } from 'angular5-toaster';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  constructor(public toasterService: ToasterService, private router: Router,private loginService: LoginService) { }

  ngOnInit() {
  }

  logIn() {
    let isEmail = new RegExp(/\S+@\S+\.\S+/);
    let emailIsValid = isEmail.test(this.username);
    if (this.username == '' || !emailIsValid) {
      return this.toasterService.pop('error', 'Error', "Please enter correct email address");
    }
    if (this.password == '') {
      return this.toasterService.pop('error', 'Error', "Password Can't be blank");
    }
    let data = {
      email: this.username,
      password: this.password
    }
    this.loginService.login(data).subscribe(res => {
      console.log('res', res);
      localStorage.setItem('loginInfo', res.token);
      this.router.navigateByUrl('/dashboard');
      return this.toasterService.pop('success', 'Success', 'You are Successfully Logged in');
    }, (err) => {
      console.log('err', err);
      return this.toasterService.pop('error', 'Error', err.message);
    });
  }
}
