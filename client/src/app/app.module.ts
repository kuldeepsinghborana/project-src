import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ToasterModule, ToasterContainerComponent, ToasterService } from './../../node_modules/angular5-toaster/angular5-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr, HttpModule } from '@angular/http';
import { CommonServiceService } from './common/common-service.service';
import { RegisterServiceService } from './register/register-service.service';
import { AuthGuard } from './common/auth-gaurd.service';
import { AuthGuardAdmin } from './common/auth-gaurd-admin.service';
import { AppRoutingModule } from './app.route.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CreatejobComponent } from './createjob/createjob.component';
import { LoginService } from './login/login.service';
import { CreatejobService } from './createjob/createjob.service';
import { JobComponent } from './job/job.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ModalModule } from "ngx-modal";
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ActivateAccountService } from './activate-account/activate-account.service';
import { UserService } from './user-service.service';
import { EmployerComponent } from './employer/employer.component';
import { AdminComponent } from './admin/admin.component';
import { CommaSepratedObjectPropertyValuesPipe } from './comma-seprated-object-property-values.pipe';
const appRoutes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    SearchComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    CreatejobComponent,
    JobComponent,
    ActivateAccountComponent,
    EmployerComponent,
    AdminComponent,
    CommaSepratedObjectPropertyValuesPipe,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ToasterModule,
    NgProgressModule,
    BrowserAnimationsModule,
    NgProgressModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    AmazingTimePickerModule,
    ModalModule

    // HttpClientModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  providers: [ToasterService, { provide: BrowserXhr, useClass: NgProgressBrowserXhr },
    CommonServiceService,
    RegisterServiceService,
    LoginService,
    AuthGuard,
    AuthGuardAdmin,
    CreatejobService,
    ActivateAccountService,
    UserService,
    CommaSepratedObjectPropertyValuesPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
