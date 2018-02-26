import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ToasterModule, ToasterService } from './../../node_modules/angular5-toaster/angular5-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr, HttpModule } from '@angular/http';
import { CommonServiceService } from './common/common-service.service';
import { RegisterServiceService } from './register/register-service.service';
import { AuthGuard } from './common/auth-gaurd.service';
import { AppRoutingModule } from './app.route.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatejobComponent } from './createjob/createjob.component';

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
    DashboardComponent,
    CreatejobComponent
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
    FormsModule
    // HttpClientModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  providers: [ToasterService, { provide: BrowserXhr, useClass: NgProgressBrowserXhr },
    CommonServiceService,
    RegisterServiceService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
