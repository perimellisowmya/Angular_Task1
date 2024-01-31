// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Array of objects with username and password properties
  users: { username: string, password: string }[] = [
    { username: 'Sowmya', password: '12345' },
    { username: 'divya', password: '67890' },

  ];
  username: string = '';
  password: string = '';
  showError: boolean = false;
  // errorType: string = '';  
  constructor(private router: Router, private authService: AuthService) { }
  onSubmit(): void {
    // Check if entered credentials match any user in the array
    const matchedUser = this.users.find(user => user.username === this.username && user.password === this.password);
    if (matchedUser) {
      console.log('Login successful!');
      this.authService.login();
      // this.router.navigate(['/home']);
     
      // Reset fields and error flag on successful login
      this.username = '';
      this.password = '';
      this.showError = false;
      //  this.errorType = '';
    } else {
      console.log('Invalid credentials');
      // Set error flag to display warnings
      this.showError = true;
      // this.errorType = this.users.some(user => user.username === this.username && user.password === this.password) ? 'password' : 'username';
      // Reset fields on unsuccessful login
      this.username = '';
      this.password = '';
    }
  }
}
