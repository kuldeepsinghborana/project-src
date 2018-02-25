import { Component, OnInit } from '@angular/core';
import { ToasterModule, ToasterService } from 'angular5-toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  constructor(public toasterService: ToasterService) { }

  ngOnInit() {
  }

  logIn() {
    if (this.username == '') {
      return this.toasterService.pop('error', 'Error', "Username Can't be blank");
    }

    if (this.password == '') {
      return this.toasterService.pop('error', 'Error', "Password Can't be blank");
    }


  }
}
