import { BlogPost } from '../../models/blogpost.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebsiteDBService {
  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get('https://piotrkieltyka-website-node.herokuapp.com/api/posts/');
    // return this.http.get('https://node.piotrkieltyka.website/api/posts/');
  }

  addPost(post: BlogPost) {
    return this.http
      .post(
        'https://piotrkieltyka-website-node.herokuapp.com/api/posts/',
        JSON.stringify(post),
        this.addHeaders(),
      )
      .subscribe(
        (data) => data,
        (err) => console.error(err),
      );
  }

  addHeaders() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return {
      headers,
    };
  }
}
