import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as bcrypt from 'bcryptjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users!: User[]
  user!: User
  notValid!: boolean
  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => this.users = res)
    this.user = new User()
  }

  findUser(form: NgForm) {
    if (form.valid) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.user.email === this.users[i].email) {
          bcrypt.compare(this.user.password, this.users[i].password, (err, result) => {
            if(result) {
              this.authService.login()
              this.notValid = false
              this.authService.isAuthenticated()
              this.router.navigate(['/home'])
            }
            else console.log(err);
          })
        }
        else this.notValid = true
      }
    }
  }
}
