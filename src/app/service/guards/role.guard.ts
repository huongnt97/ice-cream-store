import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Role } from 'src/app/models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  user: User;
  constructor(private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user) {
      if (this.user.role === Role.Store) {
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
