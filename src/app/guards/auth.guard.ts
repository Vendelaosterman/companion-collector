/*  AuthGuard 
*   The auth.guard is responsible for preventing unauthenticated users from accessing the pokemon catalogue and the trainers 
    profiles. If a user is not logged in and tries to access the pokemon catalogue they will be redirected to the login page.  
*/  


import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard {

  constructor(private router: Router) {}

  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

    if (localStorage.getItem('trainer') !== null) {
      return true;
      
    } else {
      // Redirect to the login page  when the user is not logged in
      this.router.navigate(['login']);
      return false;
    
    }
  }
}