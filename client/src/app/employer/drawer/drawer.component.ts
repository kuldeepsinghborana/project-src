import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  animations:[
    trigger('navigation', [
      state('true' , style({ left:'-20%'})), 
      state('false', style({ left:'0%'})),
      transition('0 => 1', animate('.2s')),
      transition('1 => 0', animate('.2s'))
    ]),
    trigger('showOverlay', [
      state('true' , style({ opacity: 1,display:"block" })), 
      state('false', style({ opacity: 0,display:"none" })),
      transition('0 => 1', animate('.2s')),
      transition('1 => 0', animate('.5s'))
    ])
  ]
})
export class DrawerComponent implements OnInit {
  navigation:boolean = true;
    showOverlay:boolean = false;
  constructor() { }
  navigationDrawer(){
    this.navigation = !this.navigation;
    this.showOverlay = !this.showOverlay;
}

  ngOnInit() {
  }

}
