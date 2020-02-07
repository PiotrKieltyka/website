import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  userData: any;
  redirectUrl: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        sessionStorage.setItem('user', JSON.stringify(user.uid));
        JSON.parse(sessionStorage.getItem('user'));
      } else {
        sessionStorage.setItem('user', null);
        JSON.parse(sessionStorage.getItem('user'));
      }
    });
  }

  signin(email: string, password: string): void {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        this.isLoggedIn = true;
        this.router.navigateByUrl('userinfo');
      }).catch(error => {
        console.warn(error.message);
      });
  }

  signout(): void {
    this.angularFireAuth.auth.signOut()
      .then(() => {
        this.isLoggedIn = false;
        sessionStorage.removeItem('user');
        this.router.navigateByUrl('home');
      });
  }
}
