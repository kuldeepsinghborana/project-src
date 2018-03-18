import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobOverviewComponent } from './job-overview/job-overview.component';
import { JobManagementComponent } from './job-management/job-management.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { BuyCarrotsComponent } from './buy-carrots/buy-carrots.component';
import { FarmCarrotsComponent } from './farm-carrots/farm-carrots.component';
import { BuyCarrotsService } from './buy-carrots/buy-carrots.service';
import { JobComponent } from './job/job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { InviteEmployeesComponent } from './invite-employees/invite-employees.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { ReviewEmployeesComponent } from './review-employees/review-employees.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { JobAddEditComponent } from './job-add-edit/job-add-edit.component';
// import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-modal";

// import { ModalModule } from "ngx-modal";
import { Http,HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule,
    
   // ModalModule.forChild(),
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: JobOverviewComponent, pathMatch: 'full' },
      { path:'job-management', component: JobManagementComponent, pathMatch: 'full' },
      { path:'job', component: JobComponent, pathMatch: 'full' },
      { path:'job-edit', component: JobAddEditComponent, pathMatch: 'full' },
      { path:'buy-carrots', component: BuyCarrotsComponent, pathMatch: 'full' },
      { path:'farm-carrots', component: FarmCarrotsComponent, pathMatch: 'full' },
      { path:'employee-management', component: EmployeeManagementComponent, pathMatch: 'full' },
      { path:'account-settings', component: AccountSettingsComponent, pathMatch: 'full' },
      { path:'employee-profile/:id', component: EmployeeProfileComponent, pathMatch: 'full' },
      { path:'review-employees', component: ReviewEmployeesComponent, pathMatch: 'full' },
      { path:'notifications', component: NotificationsComponent, pathMatch: 'full' },
      // { path:'employer-details/:id', component: EmployerDetailsComponent, pathMatch: 'full' },
      { path:'invite-employees/:jobId', component: InviteEmployeesComponent, pathMatch: 'full' },
      
      { path:'invite-employees/:jobId', component: InviteEmployeesComponent, pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule],
  declarations: [JobOverviewComponent, JobManagementComponent, EmployeeManagementComponent, BuyCarrotsComponent, FarmCarrotsComponent, JobComponent, AccountSettingsComponent, InviteEmployeesComponent, EmployeeProfileComponent, ReviewEmployeesComponent, NotificationsComponent, JobAddEditComponent],
  providers: [BuyCarrotsService]
})
export class EmployerModule { }
