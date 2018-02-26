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


export const routes: Routes = [
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
  {
    path: 'homepage', component: HomeComponent,
children: [
      { path: 'search', component: SearchComponent,pathMatch: 'full' },
      { path: 'login', component: LoginComponent ,pathMatch: 'full'},
      { path: 'contact', component: ContactComponent ,pathMatch: 'full'},
      { path: 'register', component: RegisterComponent ,pathMatch: 'full'},
      { path: 'about', component: AboutComponent,pathMatch: 'full' },
      { path: 'postjob', component: CreatejobComponent,pathMatch: 'full' },
    ]
  },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }