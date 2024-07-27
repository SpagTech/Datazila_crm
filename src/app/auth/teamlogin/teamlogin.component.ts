import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teamlogin',
  templateUrl: './teamlogin.component.html',
  styleUrl: './teamlogin.component.css'
})
export class TeamloginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const isAuthenticated = this.username === 'team' && this.password === 'team'; 

    if (isAuthenticated) {
      localStorage.setItem('isAuthenticate', 'true');
      localStorage.setItem('role', 'team');
      this.router.navigate(['/team-dashboard']);
    } else {
      console.log('Authentication failed!');
    }
  }

}
