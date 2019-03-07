import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      //logged in so return true
      return true;
    }
    //not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    // append this code inside .navigate if you want to show attempted route access 
    // { queryParams: { returnUrl: state.url }});
    return false;
  }
}
