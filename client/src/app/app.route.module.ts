import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './common/auth-gaurd.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CreatejobComponent } from './createjob/createjob.component';
import { JobComponent } from './job/job.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { EmployerComponent } from './employer/employer.component'
import { AdminComponent } from './admin/admin.component'

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
      { path: 'job/:id', component: JobComponent, pathMatch: 'full' }
    ]
  },
 {
    path: 'employer', component : EmployerComponent,
    loadChildren: './employer/employer.module#EmployerModule',
 },{
  path: 'admin', component : AdminComponent,
  loadChildren: './admin/admin.module#AdminModule',
}, {
  path: 'activateaccount/:token', component: ActivateAccountComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }