import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { EmployerManagementComponent } from './employer-management/employer-management.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { JobManagementComponent } from './job-management/job-management.component';
import { CarrotAnalyticsComponent } from './carrot-analytics/carrot-analytics.component';
import { ChatbotAnalyticsComponent } from './chatbot-analytics/chatbot-analytics.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { EmployerDetailsComponent } from './employer-details/employer-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { FormsModule } from '@angular/forms';
import { AdminJobEditComponent } from './admin-job-edit/admin-job-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'mission', pathMatch: 'full' },
      { path: 'mission', component: OverviewComponent, pathMatch: 'full' },
      { path: 'employer-management', component: EmployerManagementComponent, pathMatch: 'full' },
      { path: 'employee-management', component: EmployeeManagementComponent, pathMatch: 'full' },
      { path: 'job-management', component: JobManagementComponent, pathMatch: 'full' },
      { path: 'carrot-analytics', component: CarrotAnalyticsComponent, pathMatch: 'full' },
      { path: 'chatbot-analytics', component: ChatbotAnalyticsComponent, pathMatch: 'full' },
      { path: 'job-detail/:id', component: JobDetailComponent, pathMatch: 'full' },
      { path: 'job-edit/:id', component: AdminJobEditComponent, pathMatch: 'full' },
      { path:'employer-details/:id', component: EmployerDetailsComponent, pathMatch: 'full' },
      { path:'employee-details/:id', component: EmployeeDetailsComponent, pathMatch: 'full' },
      { path:'account-settings', component: AccountSettingsComponent, pathMatch: 'full' }

    ])
  ],
  exports:[RouterModule],
  declarations: [OverviewComponent, EmployerManagementComponent, EmployeeManagementComponent, JobManagementComponent, CarrotAnalyticsComponent, ChatbotAnalyticsComponent, JobDetailComponent, EmployerDetailsComponent, EmployeeDetailsComponent, AccountSettingsComponent, AdminJobEditComponent]
})
export class AdminModule { }
