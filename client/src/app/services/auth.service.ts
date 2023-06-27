import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = true
  constructor() { }

  login() {
    this.loggedIn = true
  }
  isAuthenticated(){
    return this.loggedIn
  }
}
