// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router:Router) {}
  private isAuthenticatedValue = false;

  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

  login() {
    this.isAuthenticatedValue = true;
    console.log('User authenticated');
    this.router.navigate(['home']);
  }
  

  logout() {
    this.isAuthenticatedValue = false;
    console.log('User logged out');
    this.router.navigate(['login']);
  }
}
