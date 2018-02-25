webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid contentholder\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\"><img src=\"../../assets/img/Jobbunny.png\" style=\"padding-top:5em;height:100%;width:200px;\"></div>\n    <div class=\"col-sm-6\">\n      <p></p>\n      <p></p>\n      <h2>Jobbunny is proudly made in Singapore.</h2>\n      <br>We believe that not everyone is happy in their job due to the lack of proper Job matching processes.\n      <p>Too many employees compete for each Job posting on job portals, eventually settling for anything they can get.</p>\n      <p>Interviews are simply not enough for employers to see if employees are a right fit for the company.</p>\n      <p>Eventually, this raises the level of job dissatisfaction in the country.</p>\n      <p></p>\n      <h3>For Employers</h3>Jobbunny aims to change this by using technology to help employers find the right candidates even\n      before the interview process.\n      <p></p>\n      <h3>For Employees</h3>We help employees automatically find suitable Jobs instead of combing Job portal sites and submitting\n      endless resumes.\n      <p></p>\n      <h3>See you on board! Hop Hop</h3>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n<toaster-container></toaster-container>\n<ng-progress></ng-progress>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular5_toaster_angular5_toaster__ = __webpack_require__("./node_modules/angular5-toaster/angular5-toaster.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_common_service_service__ = __webpack_require__("./src/app/common/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_service_service__ = __webpack_require__("./src/app/register/register-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_auth_gaurd_service__ = __webpack_require__("./src/app/common/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_route_module__ = __webpack_require__("./src/app/app.route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_angular5_toaster_angular5_toaster__["a" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_progressbar__["b" /* NgProgressModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_progressbar__["b" /* NgProgressModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_route_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_forms__["a" /* FormsModule */]
                // HttpClientModule,
                // RouterModule.forRoot(
                //   appRoutes,
                //   { enableTracing: true } // <-- debugging purposes only
                // )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__node_modules_angular5_toaster_angular5_toaster__["b" /* ToasterService */], { provide: __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* BrowserXhr */], useClass: __WEBPACK_IMPORTED_MODULE_7_ngx_progressbar__["a" /* NgProgressBrowserXhr */] },
                __WEBPACK_IMPORTED_MODULE_9__common_common_service_service__["a" /* CommonServiceService */],
                __WEBPACK_IMPORTED_MODULE_10__register_register_service_service__["a" /* RegisterServiceService */],
                __WEBPACK_IMPORTED_MODULE_11__common_auth_gaurd_service__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_auth_gaurd_service__ = __webpack_require__("./src/app/common/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    {
        path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
        children: [
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */], pathMatch: 'full' },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */], pathMatch: 'full' },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */], pathMatch: 'full' },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */], pathMatch: 'full' }
        ]
    },
    { path: 'dashboard', canActivate: [__WEBPACK_IMPORTED_MODULE_2__common_auth_gaurd_service__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/common/auth-gaurd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { LoginService } from './components/login/login.service';

var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log('AuthGuard#canActivate called');
        var url = state.url;
        // console.log(url);
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (localStorage.getItem('loginInfo')) {
            return true;
        }
        console.log("i am here");
        // Store the attempted URL for redirecting
        // this.loginService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/common/common-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CommonServiceService = /** @class */ (function () {
    function CommonServiceService(http, router) {
        this.http = http;
        this.router = router;
        this.hostUrl = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].API_URI;
    }
    CommonServiceService.prototype.getHeader = function (headerOptions, params, doNotSendAuthorizationParam) {
        if (params === void 0) { params = {}; }
        // var headerParams = { 'Content-Type': 'application/json' };
        var headerParams = {};
        if (doNotSendAuthorizationParam !== true) {
            //send authorization param
            // headerParams['x-auth-token'] = localStorage.getSessionId();
        }
        if (headerOptions) {
            Object.assign(headerParams, headerOptions);
        }
        var qParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        for (var key in params) {
            qParams.set(key, params[key]);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](headerParams);
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        req.search = qParams;
        return req;
    };
    CommonServiceService.prototype.get = function (url, params, headerOptions, doNotSendAuthorizationParam) {
        if (params === void 0) { params = {}; }
        if (headerOptions === void 0) { headerOptions = {}; }
        if (doNotSendAuthorizationParam === void 0) { doNotSendAuthorizationParam = false; }
        var options = this.getHeader(headerOptions, params, doNotSendAuthorizationParam);
        return this.http.get(this.hostUrl + url, options).catch(this.handleError(this));
    };
    CommonServiceService.prototype.post = function (url, params, headerOptions, doNotSendAuthorizationParam) {
        if (params === void 0) { params = {}; }
        if (headerOptions === void 0) { headerOptions = {}; }
        if (doNotSendAuthorizationParam === void 0) { doNotSendAuthorizationParam = false; }
        var options = this.getHeader(headerOptions, {}, doNotSendAuthorizationParam);
        return this.http.post(this.hostUrl + url, params, options).catch(this.handleError(this));
    };
    CommonServiceService.prototype.put = function (url, params, headerOptions, doNotSendAuthorizationParam) {
        if (params === void 0) { params = {}; }
        if (headerOptions === void 0) { headerOptions = {}; }
        if (doNotSendAuthorizationParam === void 0) { doNotSendAuthorizationParam = false; }
        var options = this.getHeader(headerOptions, {}, doNotSendAuthorizationParam);
        return this.http.put(this.hostUrl + url, params, options).catch(this.handleError(this));
    };
    CommonServiceService.prototype.delete = function (url, headerOptions, doNotSendAuthorizationParam) {
        if (headerOptions === void 0) { headerOptions = {}; }
        if (doNotSendAuthorizationParam === void 0) { doNotSendAuthorizationParam = false; }
        var options = this.getHeader(headerOptions, {}, doNotSendAuthorizationParam);
        return this.http.delete(this.hostUrl + url, options).catch(this.handleError(this));
    };
    CommonServiceService.prototype.handleError = function (obj) {
        return function (error) {
            var body = JSON.parse(error._body) || '';
            if (error.status === 401) {
                obj.localStorage.clear();
                obj.router.navigate(['/anmeldung']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(body);
        };
    };
    CommonServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], CommonServiceService);
    return CommonServiceService;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  contact works!\n</p> -->\n<div class=\"container-fluid\">\n    <div class=\"contentholder\">\n<div class=\"col-sm-2\"></div>\n<div class=\"col-sm-2\"><img src=\"../../assets/img/Jobbunny.png\" style=\"padding-top:5em;height:100%;width:200px;\"></div>\n<div class=\"col-sm-8\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 margin-bottom-4\" >\n      <h2>Contact Us</h2>\n      <p>Hop Hop! Do you have any enquiries or feedback? Let us know!</p>\n        <form class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\">Name:</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Your Name\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\">Email:</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" type=\"email\" placeholder=\"Your Email\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\">Subject</label>\n            <div class=\"col-sm-10\">\n              <select class=\"form-control\">\n                <option>General Enquiry</option>\n                <option>Business Collaborations</option>\n                <option>Investor Relations</option>\n                <option>Feedback</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\">Message</label>\n            <div class=\"col-sm-10\">\n              <textarea class=\"form-control\" rows=\"5\" placeholder=\"Write your message here\"></textarea>\n            </div>\n          </div>\n          <button class=\"btn-sm btn-warning pull-right\" type=\"submit\">Send Message\n            <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\n          </button>\n        </form>\n      <!-- </p> -->\n    </div>\n  </div>\n</div>\n<br>\n<br>\n</div>  \n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n hello from dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <nav class=\"navbar\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <i class=\"fa fa-sort-desc\"></i>\n        </button>\n      <a class=\"navbar-brand\" routerLink=\"search\">\n        <h1>jobbunny.co</h1>\n      </a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"nav\">\n      <ul class=\"nav nav-pills\">\n        <li class=\"left20\" role=\"presentation\">\n          <a routerLink=\"about\">How it works?</a>\n        </li>\n        <li class=\"left20\" role=\"presentation\">\n          <a routerLink=\"contact\">Contact</a>\n        </li>\n        <li class=\"left20\" role=\"presentation\">\n          <a routerLink=\"register\">Signup</a>\n        </li>\n        <li class=\"left20\" role=\"presentation\">\n          <a routerLink=\"login\">Login</a>\n        </li>\n        <div class=\"right\">\n          <div class=\"medium strong\">For Employers</div>\n          <a class=\"btn btn-md btn-green top10\" routerLink=\"newjob\">Post job for free</a>\n          <br>\n          <small class=\"top10\">3 minutes is all you need</small>\n        </div>\n      </ul>\n    </div>\n  </nav>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"clearfix\">\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n<div class=\"footer\">\n  <span>© jobbunny.co | {{currentYear}} </span>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getCurrentYear();
    };
    HomeComponent.prototype.getCurrentYear = function () {
        this.currentYear = (new Date()).getFullYear();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"contentholder\">\n    <h1 class=\"align-center\">Jobbunny Login</h1>\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <form name=\"login\" action=\"/api/users/login\" method=\"post\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input class=\"form-control\" id=\"username\" type=\"text\" [(ngModel)]=\"username\" placeholder=\"Enter your email\" name=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input class=\"form-control\" id=\"password\" type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" name=\"password\">\n        </div>\n        <button class=\"btn btn-success btn-block\" type=\"submit\" (click)=\"logIn()\">Login</button>\n        <br>\n      </form>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular5_toaster__ = __webpack_require__("./node_modules/angular5-toaster/angular5-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(toasterService) {
        this.toasterService = toasterService;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logIn = function () {
        if (this.username == '') {
            return this.toasterService.pop('error', 'Error', "Username Can't be blank");
        }
        if (this.password == '') {
            return this.toasterService.pop('error', 'Error', "Password Can't be blank");
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular5_toaster__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular5_toaster__["a" /* ToasterService */]) === "function" && _a || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());



/***/ }),

/***/ "./src/app/register/register-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_service_service__ = __webpack_require__("./src/app/common/common-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterServiceService = /** @class */ (function () {
    function RegisterServiceService(http, commonServiceService) {
        this.http = http;
        this.commonServiceService = commonServiceService;
    }
    RegisterServiceService.prototype.getData = function () {
        console.log('in register');
        return this.commonServiceService.get('user/cap/abba')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RegisterServiceService.prototype.handleError = function (error) {
        var body = JSON.parse(JSON.stringify(error)) || '';
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(body);
    };
    RegisterServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_3__common_common_service_service__["a" /* CommonServiceService */]])
    ], RegisterServiceService);
    return RegisterServiceService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-blue {\n    border-radius: 4px !important;\n    padding: 8px;\n    font-style: 1em;\n    color: #fff !important;\n    border: none !important;\n    background-color: #1ca4fc !important\n}\n\n.btn-orange {\n    border-radius: 4px !important;\n    padding: 8px;\n    font-style: 1em;\n    color: #fff !important;\n    border: none !important;\n    background-color: #fb9047 !important\n}\n\n.btn-green {\n    border-radius: 4px !important;\n    padding: 8px;\n    font-style: 1em;\n    color: #fff !important;\n    border: none !important;\n    background-color: #257F19 !important\n}\n\n.btn-gray {\n    border-radius: 4px !important;\n    padding: 8px;\n    font-style: 1em;\n    color: #fff !important;\n    border: none !important;\n    background-color: #A5A5A5 !important\n}\n\n.filter span {\n    margin-right: 5px;\n    font-weight: 600;\n    color: #e3e3e3\n}\n\n.filter span:after {\n    content: ', '\n}\n\n.filter span:last-child:after {\n    content: ''\n}\n\nbody {\n    height: 100%;\n    color: #000\n}\n\n.yellow-bg {\n    background-color: #FDBF2D\n}\n\n.capitalize:first-letter {\n    text-transform: capitalize\n}\n\n.black-font,.black {\n    color: #000\n}\n\n.green-font,.green {\n    color: #2CAA1F\n}\n\n.white-bg {\n    background-color: #fff;\n    color: inherit\n}\n\n.banner-cover {\n    background-image: url('home-bg.42a2ec61448a013beea8.jpg');\n    background-position: center center;\n    background-size: cover;\n    height: 30%\n}\n\n.height50 {\n    height: 200px\n}\n\n.icon-wrapper {\n    position: relative;\n    float: left\n}\n\n*.icon-blue {\n    color: #0088cc\n}\n\n*.icon-grey {\n    color: gray\n}\n\n.badge {\n    background: red;\n    width: auto;\n    height: auto;\n    margin: 0;\n    border-radius: 50%;\n    position: absolute;\n    top: 10px;\n    right: -8px;\n    padding: 5px\n}\n\n.left {\n    float: left !important\n}\n\n.right {\n    float: right !important\n}\n\n.align-left {\n    text-align: left !important\n}\n\n.align-center {\n    text-align: center !important\n}\n\n.align-right {\n    text-align: right !important\n}\n\n.top10 {\n    margin-top: 10px !important\n}\n\n.top20 {\n    margin-top: 20px !important\n}\n\n.bottom10 {\n    margin-bottom: 10px !important\n}\n\n.right10 {\n    margin-right: 10px !important\n}\n\n.left10 {\n    margin-left: 10px !important\n}\n\n.left20 {\n    margin-left: 20px !important\n}\n\n.top-padding0 {\n    padding-top: 0px !important\n}\n\n.pad-right10 {\n    padding-right: 10px !important\n}\n\n.large {\n    font-size: 2em !important\n}\n\n.medium {\n    font-size: 1.3em !important\n}\n\n.normal {\n    font-weight: normal\n}\n\n.strong {\n    font-weight: 700 !important\n}\n\n.job-item {\n    padding: 20px;\n    margin-bottom: 10px;\n    border: 1px solid #e3e3e3\n}\n\n.job-item a {\n    color: red\n}\n\n.job-item a:hover {\n    color: #196aae\n}\n\n.custom-link {\n    color: #000\n}\n\n.custom-link:hover {\n    color: #196aae\n}\n\n.btn-rectangle {\n    border-radius: 1px\n}\n\n#search-field {\n    height: 50px;\n    border-color: #FFF7E5;\n    background-color: #FAAB31\n}\n\n#search-field::-webkit-input-placeholder {\n    font-size: 1.4em;\n    color: #FFF7E5\n}\n\n#search-field:-ms-input-placeholder {\n    font-size: 1.4em;\n    color: #FFF7E5\n}\n\n#search-field::-ms-input-placeholder {\n    font-size: 1.4em;\n    color: #FFF7E5\n}\n\n#search-field::placeholder {\n    font-size: 1.4em;\n    color: #FFF7E5\n}\n\n#search-button {\n    width: 150px;\n    height: 50px;\n    font-size: 1.2em;\n    background-color: #FD9C28;\n    color: #FFF7E5\n}\n\n.header {\n    color: #ffffff;\n    padding: 0 4em 0 4em\n}\n\n#nav {\n    padding-top: 2em;\n    font-size: 1.3em\n}\n\n.hero {\n    color: #ffffff;\n    text-align: center;\n    margin-bottom: 3em\n}\n\n.footer {\n    bottom: 0px;\n    width: 100%;\n    height: 5%;\n    background-color: #257F19;\n    color: #ffffff;\n    text-align: center;\n    padding: 2em\n}\n\n.postjob {\n    background: #fff;\n    padding-bottom: 3em\n}\n\n.postjob a {\n    color: black\n}\n\n.contentholder {\n    color: #fff;\n    padding-left: auto;\n    padding-right: auto\n}\n\n.employeecard {\n    background-color: #ffffff;\n    width: 180px;\n    height: 360px;\n    padding: 2em;\n    color: #464646;\n    border: 2px solid #ececec;\n    border-radius: 10px\n}\n\n.employeeprofile {\n    background-color: #ffffff;\n    text-align: left;\n    width: 80%;\n    height: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 2em;\n    padding-bottom: 5em;\n    color: #363636;\n    border: 2px solid #ececec;\n    border-radius: 20px\n}\n\n.employeeprofile img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center;\n       object-position: center;\n    height: 150px;\n    width: 150px;\n    border: 2px solid #ececec;\n    border-radius: 20px\n}\n\n.employeecard img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 20px;\n    -o-object-position: center;\n       object-position: center;\n    height: 100px;\n    width: 100px\n}\n\n#salary {\n    color: #2ab400\n}\n\ninput {\n    color: black\n}\n\n.click {\n    cursor: pointer\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"contentholder\">\n  <h1 class=\"align-center\">Jobbunny Registration</h1>\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <form name=\"register\" action=\"/api/users/register\" method=\"post\">\n        <div class=\"form-group\"><label for=\"email\">Email</label><input class=\"form-control\" id=\"username\" type=\"text\" placeholder=\"Enter your email\"\n            name=\"email\"></div>\n        <div class=\"form-group\"><label for=\"password\">Password</label><input class=\"form-control\" id=\"password\" type=\"password\" placeholder=\"Password\"\n            name=\"password\"></div>\n        <div class=\"form-group\"><label for=\"password-repeat\">Password Confirmation</label><input class=\"form-control\" id=\"password-repeat\" type=\"password\"\n            placeholder=\"Re-enter Password\" name=\"passwordConf\"></div><button class=\"btn btn-success btn-block\" type=\"submit\">Register</button><br></form>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div> -->\n<div class=\"container-fluid\">\n  <div class=\"contentholder\">\n    <h1 class=\"align-center\">Jobbunny Registration</h1>\n\n    <!-- alert/error displaying code in alerts/alerts-directive.html -->\n    <!-- <app-alert></app-alert> -->\n\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <!-- <form ng-hide=\"vm.message\" name=\"register\" ng-submit=\"vm.register()\"> -->\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Username\" [(ngModel)]=\"username\" autocapitalize=\"none\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" autocapitalize=\"none\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password-repeat\">Repeat Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"password-repeat\" placeholder=\"Re-enter Password\" [(ngModel)]=\"confirmPassword\"\n            autocapitalize=\"none\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-success btn-block\" (click)=\"register()\">Register</button>\n        <br/>\n        <!-- </form> -->\n      </div>\n      <div class=\"col-md-3\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular5_toaster__ = __webpack_require__("./node_modules/angular5-toaster/angular5-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_service_service__ = __webpack_require__("./src/app/register/register-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(toasterService, registerServiceService) {
        this.registerServiceService = registerServiceService;
        this.username = '';
        this.password = '';
        this.confirmPassword = '';
        this.toasterService = toasterService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // let current = this;
        // setTimeout(function () {
        //   current.popToast();
        // }, 3000)
        // this.registerServiceService.getData().subscribe(res => {
        //   console.log(res, 'check')
        // })
    };
    RegisterComponent.prototype.popToast = function () {
        console.log("hello");
        this.toasterService.pop('success', 'Args Title', 'Args Body');
    };
    RegisterComponent.prototype.register = function () {
        if (this.username == '') {
            return this.toasterService.pop('error', 'Error', "Username Can't be blank");
        }
        if (this.password == '') {
            return this.toasterService.pop('error', 'Error', "Password Can't be blank");
        }
        if (this.confirmPassword == '') {
            return this.toasterService.pop('error', 'Error', "ConfirmPassword Can't be blank");
        }
        if (this.password != this.confirmPassword) {
            return this.toasterService.pop('error', 'Error', "Password and confirm password must be same");
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular5_toaster__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular5_toaster__["a" /* ToasterService */]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_2__register_service_service__["a" /* RegisterServiceService */]])
    ], RegisterComponent);
    return RegisterComponent;
    var _a;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"banner-cover\">\n    <div class=\"container-fluid\">\n      <div class=\"hero\">\n        <h1 class=\"strong\"> Hop Hop do you need a job?</h1>\n        <h3 class=\"normal\">Meet the ultimate job search assistant. No signup required !</h3>\n        <br>\n        <br>\n        <form class=\"form-inline\" action=\"/search\" accept-charset=\"UTF-8\" method=\"post\">\n          <input class=\"form-control right10\" id=\"search-field\" type=\"text\" size=\"50\" name=\"query\" placeholder=\"Search here\" autofocus>\n          <input class=\"btn btn-md\" id=\"search-button\" type=\"submit\" name=\"commit\" value=\"Search\" data-disable-with=\"Search\">\n        </form>\n        <img class=\"top20\" src=\"../../assets/img/Jobbunny.png\" style=\"height:250px;width:200px;\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    API_URI: 'http://localhost:3000/api'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map