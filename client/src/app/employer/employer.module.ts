import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';
import { JobOverviewComponent } from './job-overview/job-overview.component';
import { JobManagementComponent } from './job-management/job-management.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { BuyCarrotsComponent } from './buy-carrots/buy-carrots.component';
import { FarmCarrotsComponent } from './farm-carrots/farm-carrots.component';
import { BuyCarrotsService } from './buy-carrots/buy-carrots.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: JobOverviewComponent, pathMatch: 'full' },
      { path:'job-management', component: JobManagementComponent, pathMatch: 'full' },
      { path:'buy-carrots', component: BuyCarrotsComponent, pathMatch: 'full' },
      { path:'farm-carrots', component: FarmCarrotsComponent, pathMatch: 'full' },
      { path:'employee-management', component: EmployeeManagementComponent, pathMatch: 'full' }
    ])
  ],
  exports:[RouterModule],
  declarations: [JobOverviewComponent, JobManagementComponent, EmployeeManagementComponent, BuyCarrotsComponent, FarmCarrotsComponent],
  providers:[BuyCarrotsService]
})
export class EmployerModule { }
