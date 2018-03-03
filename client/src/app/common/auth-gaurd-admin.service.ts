import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
// import { LoginService } from './components/login/login.service';


import {
    Routes, RouterModule, Router, ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuardAdmin implements CanActivate {

    constructor(private router: Router, ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('AuthGuard#canActivate called');
        let url: string = state.url;
        // console.log(url);
        return this.checkLogin(url);
    }
    checkLogin(url: string): boolean {
        if (localStorage.getItem('adminLoginInfo')) {
            return true;
        }
        console.log("i am here")
        // Store the attempted URL for redirecting
        // this.loginService.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(['']);
        return false;
    }
}