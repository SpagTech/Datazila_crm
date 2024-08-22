import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const role = localStorage.getItem('role');

    if (isAuthenticated) {
      if (role === 'admin' && state.url.startsWith('/dashboard')) {
        return true;  // Allow access to admin routes
      } else if (role === 'team' && state.url.startsWith('/team-dashboard')) {
        return true;  // Allow access to team routes
      } else {
        // Redirect based on the role
        if (role === 'admin') {
          return this.router.parseUrl('/dashboard');
        } else if (role === 'team') {
          return this.router.parseUrl('/team-dashboard');
        }
      }
    }
    
    // Redirect to the appropriate login page if not authenticated
    return this.router.parseUrl('/adminlogin');
  }
}
