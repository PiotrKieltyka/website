import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        sessionStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(sessionStorage.getItem('user'));
      } else {
        sessionStorage.setItem('user', null);
        JSON.parse(sessionStorage.getItem('user'));
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  signin(email, password): void {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        const userData: User = {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          emailVerified: result.user.emailVerified,
        };
        this.router.navigateByUrl('home');
      }).catch((error) => {
        console.warn(error.message);
      });
  }

  signout(): void {
    this.angularFireAuth.auth.signOut()
      .then(() => {
        sessionStorage.removeItem('user');
        this.router.navigateByUrl('home');
      });
  }
}
