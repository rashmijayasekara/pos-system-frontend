import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token=localStorage.getItem("token");
    if (token){
      const credentialed=atob(token);  // username: password
      const[username, password]=credentialed.split(":");
      if (username==='admin' && password==='admin'){

        return true;
      }else {
        localStorage.removeItem('token');
      }
    }

    this.router.navigateByUrl('/login');
    return false;
  }

}
