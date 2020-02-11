import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface User {
  uid: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  photoURL: string;
}

interface DialogData {
  uid: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  photoURL: string;
}

@Component({
  selector: 'site-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  user: User;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.userData;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileDialog, {
      width: '250px',
      data: {
        uid: this.user.uid,
        displayName: this.user.displayName,
        email: this.user.email,
        emailVerified: this.user.emailVerified,
        phoneNumber: this.user.phoneNumber,
        photoURL: this.user.photoURL,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.authService.updateProfile(result);
      this.user = result;
    });
  }
}

@Component({
  selector: 'site-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.scss']
})
export class ProfileDialog {
  constructor(
    public dialogRef: MatDialogRef<ProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
