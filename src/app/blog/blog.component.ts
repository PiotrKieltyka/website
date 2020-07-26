import { Component, OnInit } from '@angular/core';
import { BlogpostsDB } from 'src/models/blogposts.db';

@Component({
  selector: 'site-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogposts = BlogpostsDB;

  constructor() { }

  ngOnInit(): void {
  }

}
