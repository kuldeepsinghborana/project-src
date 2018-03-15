import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
import { ModalModule, Modal } from "ngx-modal";
import { ToasterModule, ToasterContainerComponent, ToasterService } from '../../../node_modules/angular5-toaster/angular5-toaster';

import {ImageCropperComponent, CropperSettings,Bounds} from 'ng2-img-cropper';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  public curruntUserDetails: object = { carrots: {} };
  cropperSettings2: CropperSettings;
  data2:any;
  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;
  croppedImage: any = '';
 constructor(public userService: UserService, private router: Router,public toasterService: ToasterService) {
   //Cropper s  ettings 2
   this.cropperSettings2 = new CropperSettings();
   this.cropperSettings2.width = 200;
   this.cropperSettings2.height = 200;
   this.cropperSettings2.keepAspect = false;
   this.cropperSettings2.croppedWidth = 200;
   this.cropperSettings2.croppedHeight = 200;
   this.cropperSettings2.canvasWidth = 500;
   this.cropperSettings2.canvasHeight = 300;
   this.cropperSettings2.minWidth = 100;
   this.cropperSettings2.minHeight = 100;
   this.cropperSettings2.rounded = true;
   this.cropperSettings2.minWithRelativeToResolution = false;
   this.cropperSettings2.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
   this.cropperSettings2.cropperDrawSettings.strokeWidth = 2;
   this.cropperSettings2.noFileInput = true;
   this.data2 = {};
    userService.getUserSettings('employer');
    userService.userDetail.subscribe(user => {
      this.curruntUserDetails = user;
    })
  }

  ngOnInit() {

  }
  logout() {
    localStorage.clear();
    return this.router.navigate([""]);

  }
  fileChangeListener($event) {
    var image:any = new Image();
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent:any) {
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);
       
      
    };
   myReader.readAsDataURL(file);
   
}
saveCroppedImage(image,myModal){
this.croppedImage = image;
let dataToSend = {
  "imageUrl":this.croppedImage
}
this.userService.saveUserProfile(dataToSend).subscribe(res => {
  console.log("lets check",res)
  this.toasterService.pop('success', 'Success', res.message);
  myModal.close();  
}, err => {
  return this.toasterService.pop('error', 'Error', err.message);
}); 


}
}
