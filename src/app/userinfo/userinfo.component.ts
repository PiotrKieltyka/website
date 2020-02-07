import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

interface User {
  uid: string;
  displayName: string;
  photoURL: string;
  phoneNumber: string;
  email: string;
  emailVerified: boolean;
}

@Component({
  selector: 'site-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  user: User;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.userData;
  }

}
