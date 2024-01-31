// navbar.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authService: AuthService) {
   
  }


  onLogout(): void {
    // Call AuthService's logout method to set authentication status to false
    this.authService.logout();
  }
}
