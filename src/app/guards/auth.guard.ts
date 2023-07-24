import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

    console.log("hej")

    if (localStorage.getItem('username') !== null) {
      return true;
    } else {
      // Redirect to the login page or any other route when the user is not logged in
      return false;
      
    }
  }
}

/*export class AuthGuard implements CanActivateFn {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     if(localStorage.getItem('username') != "not logged"){
      return true
     }

    return false;
  }
  
}*/
