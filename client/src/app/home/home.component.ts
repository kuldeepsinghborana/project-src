import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentYear;
  constructor() { }

  ngOnInit() {
    this.getCurrentYear()
  }

  getCurrentYear() {
    this.currentYear = (new Date()).getFullYear();
  }

}
