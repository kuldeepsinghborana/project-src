import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ActivateAccountService } from './activate-account.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  public verified = false;
  public invalidToken = false;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private activateAccountService: ActivateAccountService) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let token = params['token'];
      this.activateAccountService.activateAccount(token).subscribe(res => {
        // console.log('res', res);
        this.verified = true;
        // console.log('res', res);
      }, err => {
        // console.log('err', err);
        this.invalidToken = true;
      });
    });
  }

}
