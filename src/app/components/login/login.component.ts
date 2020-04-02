import { User } from './../../interfaces/User';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  showPass: boolean;
  user: User;
  logged: boolean;
  loginError: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    this.showPass = false;
    this.user = {
      mail: '',
      pass: ''
    };
    this.loginError = false;
   }

  ngOnInit() {
    if (this.authService.isAuthenticated()){
      this.router.navigate(['inbox']);
  }
}

  getInputType() {
    if (this.showPass) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPass = !this.showPass;
  }

  async checkLogin() {
  //  this.loginError = false;
    this.logged = await this.authService.getLogin(this.user);
    if (this.logged) {
      this.router.navigate(['/inbox']);
      localStorage.setItem('isLogged', this.user.mail);
    } else {
        this.loginError = true;
    }
  }
}
