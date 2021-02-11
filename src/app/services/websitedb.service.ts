import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BlogPost } from '../../models/blogpost.model';

@Injectable({
  providedIn: 'root',
})
export class WebsiteDBService {
  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get('https://node.piotrkieltyka.website/api/posts/');
  }

  addPost(post: BlogPost) {
    return this.http
      .post(
        'https://node.piotrkieltyka.website/api/posts/',
        JSON.stringify(post),
        this.addHeaders()
      )
      .subscribe(
        (data) => data,
        (err) => console.error(err)
      );
  }

  addHeaders() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return {
      headers,
    };
  }
}
