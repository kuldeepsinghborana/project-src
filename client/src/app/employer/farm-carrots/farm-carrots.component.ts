import { Component, OnInit, TemplateRef } from '@angular/core';
// import { ModalModule, Modal } from "ngx-modal";
// import { BsModalRef } from 'ngx-bootstrap/modal';
// import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-farm-carrots',
  templateUrl: './farm-carrots.component.html',
  styleUrls: ['./farm-carrots.component.css']
})
export class FarmCarrotsComponent implements OnInit {
  // modalRef: BsModalRef;
  email = '';

  constructor() {
   }

  ngOnInit() {
  }
  sendGift() {
    console.log('sendGift');
  }

  // openModal(template: TemplateRef<any>) {
  //   this.email = '';
  //   this.modalRef = this.modalService.show(template);
  // }

}
