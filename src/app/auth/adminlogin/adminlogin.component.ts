import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
   
    const isAuthenticated = this.username === 'admin' && this.password === 'admin'; 

    if (isAuthenticated) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('role','admin');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Authentication failed!');
     
    }
  }
}
