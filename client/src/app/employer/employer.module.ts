import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrawerComponent } from './drawer/drawer.component';
import {BrowserModule} from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: DashboardComponent, pathMatch: 'full' },
      { path: 'drawer', component: DrawerComponent, pathMatch: 'full' },
    ])
  ],
  exports:[RouterModule],
  declarations: [DashboardComponent, DrawerComponent]
})
export class EmployerModule { }
