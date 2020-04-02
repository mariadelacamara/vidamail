import { User } from './../interfaces/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogged: User;
  authenticated: boolean;

constructor(private http: HttpClient) {
  this.userLogged = {
    mail: '',
    pass: ''
  };
  this.authenticated = false;
  }

 async getLogin(user: User) {
   this.userLogged = await this.http.get<User>('../../assets/data/user.json').toPromise();
   if (this.userLogged.mail === user.mail && this.userLogged.pass === user.pass)
   {
     this.authenticated = true;
   }
   return this.authenticated;
 }

 isAuthenticated() {
   return localStorage.getItem('isLogged');
 }
}
