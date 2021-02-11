import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;
  public userData: firebase.User;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
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

  async updateProfile(user: firebase.User): Promise<void> {
    (await this.angularFireAuth.currentUser)
      .updateProfile({
        displayName: user.displayName,
        photoURL: user.photoURL,
      })
      .then((result) => result)
      .catch((error) => error.message);
  }

  signin(email: string, password: string): void {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.isLoggedIn = true;
        this.userData = result.user;
        this.router.navigateByUrl('userinfo');
      })
      .catch((error) => error.message);
  }

  signout(): void {
    this.angularFireAuth.signOut().then(() => {
      this.isLoggedIn = false;
      sessionStorage.removeItem('user');
      this.router.navigateByUrl('home');
    });
  }
}
