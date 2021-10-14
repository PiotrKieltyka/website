import { BlogPost } from '../../models/blogpost.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebsiteDBService {
  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get('https://node.piotrkieltyka.website:33033/api/posts/');
  }

  addPost(post: BlogPost) {
    return this.http
      .post(
        'https://node.piotrkieltyka.website:33033/api/posts/',
        JSON.stringify(post),
        this.addHeaders(),
      )
      .subscribe(
        (data) => data,
        (err) => err,
      );
  }

  addHeaders() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return {
      headers,
    };
  }
}
