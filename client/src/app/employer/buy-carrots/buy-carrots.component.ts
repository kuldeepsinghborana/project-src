import { Component, OnInit } from '@angular/core';
import { ToasterModule, ToasterContainerComponent, ToasterService } from './../../../../node_modules/angular5-toaster/angular5-toaster';
import { Router } from '@angular/router';
import { BuyCarrotsService } from './buy-carrots.service';
declare var braintree: any;
// var dropin = require('braintree-web-drop-in');

@Component({
  selector: 'app-buy-carrots',
  templateUrl: './buy-carrots.component.html',
  styleUrls: ['./buy-carrots.component.css']
})

export class BuyCarrotsComponent implements OnInit {
  public clientToken = '';
  public showCard: boolean = false;

  constructor(public toasterService: ToasterService, private router: Router, private buyCarrotsService: BuyCarrotsService) { }

  ngOnInit() {
    this.buyCarrotsService.clientToken().subscribe(res => {
      console.log('res', res);
      this.clientToken = res.clientToken;
    }, err => {
      console.log('err', err);
    })
  }

  buyNow(planType) {
    let self = this;
    console.log(planType);

    // braintree.dropin.create({
    //   authorization: this.clientToken,
    //   container: '#dropin-container',
    //   paypal: {
    //     container: "paypal-button"
    //   }
    // }, function (err, clientInstance) {
    //   console.log('err', err);
    //   self.showCard = true;   
    //   console.log('clientInstance', clientInstance);
    // });

    // braintree.setup(this.clientToken, 'dropin', {
    //   container: 'dropin-container',
    //   paypal: {
    //     singleUse: true,
    //     amount: 10.00,
    //     currency: 'USD'
    //   }
    // });

    self.showCard = true;
    let button = document.querySelector('#submit-button');
    braintree.dropin.create({
      authorization: this.clientToken,
      container: '#dropin-container',
      paypal: {
        container: "paypal-button"
      }
    }, function (createErr, instance) {
      button.addEventListener('click', function () {
        instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
          console.log('requestPaymentMethodErr', requestPaymentMethodErr);
          console.log('paylaod', payload);
          // Submit payload.nonce to your server
          if (payload) {
            let data = {
              payment_method_nonce:payload.nonce,
              planType:planType
            }
            self.buyCarrotsService.checkout(data).subscribe(res => {
              if (res) {
                console.log('res', res);
              }
            }, err => {
              console.log('err', err);
            })
          }
        });
      });
    });
  }
}
