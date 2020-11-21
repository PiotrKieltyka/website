import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import firebase from 'firebase/app';

@Component({
  selector: 'site-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  user: firebase.User;

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
      data: {...this.user}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.updateProfile(result);
        this.user = result;
      }
    });
  }
}

@Component({
  selector: 'site-dialog',
  templateUrl: './profile-edit.dialog.html',
  styleUrls: ['./profile-edit.dialog.scss']
})
export class ProfileDialog {
  constructor(
    public dialogRef: MatDialogRef<ProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: firebase.User) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
