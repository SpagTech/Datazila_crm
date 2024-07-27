import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  constructor(private router: Router) { }

  logout() {
    // Perform any necessary cleanup, such as clearing authentication tokens
    // Redirect to the admin login page
    this.router.navigate(['/adminlogin']);
  }

}
