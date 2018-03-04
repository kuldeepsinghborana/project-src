import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { EmployerManagementComponent } from './employer-management/employer-management.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { JobManagementComponent } from './job-management/job-management.component';
import { CarrotAnalyticsComponent } from './carrot-analytics/carrot-analytics.component';
import { ChatbotAnalyticsComponent } from './chatbot-analytics/chatbot-analytics.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'mission', pathMatch: 'full' },
      { path: 'mission', component: OverviewComponent, pathMatch: 'full' },
      { path: 'employer-management', component: EmployerManagementComponent, pathMatch: 'full' },
      { path: 'employee-management', component: EmployeeManagementComponent, pathMatch: 'full' },
      { path: 'job-management', component: JobManagementComponent, pathMatch: 'full' },
      { path: 'carrot-analytics', component: CarrotAnalyticsComponent, pathMatch: 'full' },
      { path: 'chatbot-analytics', component: ChatbotAnalyticsComponent, pathMatch: 'full' },
    ])
  ],
  exports:[RouterModule],
  declarations: [OverviewComponent, EmployerManagementComponent, EmployeeManagementComponent, JobManagementComponent, CarrotAnalyticsComponent, ChatbotAnalyticsComponent]
})
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AdminModule { }
