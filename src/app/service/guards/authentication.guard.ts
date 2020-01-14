import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, CanLoad,
  Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { Role } from 'src/app/models/role';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  private allowedRoles: string[];
  user: User;
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user) {
      if (this.user.role === Role.Admin) {
        return true;
      }
      if (this.user.role !== Role.Admin && this.user.role !== Role.Store) {
        this.router.navigate(['/login']);
        return false;
      }
      this.router.navigate(['/**'], { skipLocationChange: true });
      return false;
    }
    this.router.navigate(['/login']);
    return false;

  }

}
