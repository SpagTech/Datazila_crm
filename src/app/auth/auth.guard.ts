import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const role = localStorage.getItem('role');

    if (isAuthenticated) {
     
      if (state.url.startsWith('/dashboard') && role === 'admin') {
        return true;
      } else if (state.url.startsWith('/team-dashboard') && role === 'team') {
        return true;
      } else {
        this.router.navigate(['/adminlogin']);
        return false;
      }
    } else {
      this.router.navigate(['/adminlogin']);
      return false;
    }
  }
}

