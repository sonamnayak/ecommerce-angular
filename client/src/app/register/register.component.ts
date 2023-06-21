import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user!: User
  constructor(private userService: UserService, private router: Router, private authService: AuthService) {
    this.user = new User()
  }

  saveData(form: NgForm) {
    if(form.valid) {
      this.userService.addUser(this.user).subscribe(res => {
        if(res.status === 200) {
          this.authService.loggedIn = true
          this.router.navigate(['/home'])
        }
      })
    }
  }
}
