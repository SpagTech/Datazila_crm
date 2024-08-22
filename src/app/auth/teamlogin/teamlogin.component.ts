import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teamlogin',
  templateUrl: './teamlogin.component.html',
  styleUrls: ['./teamlogin.component.css']
})
export class TeamloginComponent {
  teamName: string = '';
  teamID: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const isAuthenticated = this.teamName === 'team' && this.teamID === 'team'; 

    if (isAuthenticated) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('role', 'team');
      this.router.navigate(['/team-dashboard']);
    } else {
      console.log('Authentication failed!');
    }
  }
}
