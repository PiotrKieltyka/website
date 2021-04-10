import { Component, Inject } from '@angular/core';
import { BlogPost } from '../../models/blogpost.model';
import { AuthService } from '../services/auth.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { WebsiteDBService } from '../services/websitedb.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMM YYYY',
  },
};

@Component({
  selector: 'site-blog',
  styleUrls: ['./blog.component.scss'],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  blogposts: BlogPost[] = [];
  private post: BlogPost = {
    content: '',
    date: moment().format(),
    link: '',
    title: '',
  };

  constructor(
    public postDialog: MatDialog,
    public authService: AuthService,
    public dbService: WebsiteDBService,
  ) {
    this.getAllPosts();
  }

  openAddPostDialog(): void {
    const dialogRef = this.postDialog.open(AddPostDialog, {
      autoFocus: true,
      data: { ...this.post },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result.date = moment(result.date).format('MMMM D, YYYY');
        this.dbService.addPost(result);
      }
    });
  }

  getAllPosts() {
    this.dbService
      .getAllPosts()
      .subscribe(
        (result: { posts: BlogPost[] }) => (this.blogposts = result.posts),
      );
  }
}

@Component({
  providers: [
    {
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
      provide: DateAdapter,
      useClass: MomentDateAdapter,
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS,
    },
  ],
  selector: 'site-addPostDialog',
  styleUrls: ['./add-post.dialog.scss'],
  templateUrl: './add-post.dialog.html',
})
export class AddPostDialog {
  constructor(
    public dialogRef: MatDialogRef<AddPostDialog>,
    @Inject(MAT_DIALOG_DATA) public data: BlogPost,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
