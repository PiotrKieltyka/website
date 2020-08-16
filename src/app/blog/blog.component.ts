import {Component, Inject} from '@angular/core';
import { BlogpostsDB } from 'src/models/blogposts.db';
import {AuthService} from '../services/auth.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import * as moment from 'moment';

interface Post {
  title: string;
  date: string;
  link?: string;
  content: string;
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMM YYYY',
  }
};

@Component({
  selector: 'site-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  post: Post = { title: '', date: '', link: '', content: '' };
  blogposts = BlogpostsDB;

  constructor(
    public postDialog: MatDialog,
    public authService: AuthService,
  ) { }

  openAddPostDialog(): void {
    const dialogRef = this.postDialog.open(AddPostDialog, {
      width: '500px',
      data: {
        title: this.post.title,
        date: this.post.date,
        link: this.post.link,
        content: this.post.content
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.date = moment(result.date).format('MMMM D, YYYY');
        console.log(result);
      }
    });
  }
}

@Component({
  selector: 'site-addPostDialog',
  templateUrl: './add-post.dialog.html',
  styleUrls: ['./add-post.dialog.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS, useValue: MY_FORMATS
    }
  ]
})
export class AddPostDialog {
  constructor(
    public dialogRef: MatDialogRef<AddPostDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Post
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
