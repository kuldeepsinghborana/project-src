import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './common/auth-gaurd.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatejobComponent } from './createjob/createjob.component';
import { JoboverviewComponent } from './joboverview/joboverview.component';
import { JobmanagementComponent } from './jobmanagement/jobmanagement.component';
import { EmployeemanagementComponent } from './employeemanagement/employeemanagement.component';
import { PurchasecarrotsComponent } from './purchasecarrots/purchasecarrots.component';
import { FarmcarrotsComponent } from './farmcarrots/farmcarrots.component';


export const routes: Routes = [
  { path: '', redirectTo: '/homepage/search', pathMatch: 'full' },
  {
    path: 'homepage', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: SearchComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent, pathMatch: 'full' },
      { path: 'register', component: RegisterComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent, pathMatch: 'full' },
      { path: 'postjob', component: CreatejobComponent, pathMatch: 'full' },
    ]
  },
  {
    path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: JoboverviewComponent },
      { path: 'jobmanagement', component: JobmanagementComponent },
      { path: 'employeemanagement', component: EmployeemanagementComponent },
      { path: 'purchasecarrots', component: PurchasecarrotsComponent },
      { path: 'farmcarrot', component: FarmcarrotsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }