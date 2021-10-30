import { BlogPost } from '../../models/blogpost.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { API_NODE_TOKEN } from './api_token';

@Injectable({
  providedIn: 'root',
})
export class WebsiteDBService {
  constructor(
    private http: HttpClient,
    @Inject(API_NODE_TOKEN) private API_NODE_TOKEN: string,
  ) {}

  getAllPosts(): Observable<{ posts: Array<BlogPost> }> {
    return this.http.get(this.API_NODE_TOKEN + 'posts/') as Observable<{
      posts: Array<BlogPost>;
    }>;
  }

  getPostById(id: string): Observable<BlogPost> {
    return this.http.get(
      this.API_NODE_TOKEN + 'post/' + id,
    ) as Observable<BlogPost>;
  }

  addPost(post: BlogPost): Observable<any> {
    return this.http.post(
      this.API_NODE_TOKEN + 'post/add',
      JSON.stringify(post),
      this.addHeaders(),
    );
  }

  updatePostById(id: string, post: BlogPost): Observable<any> {
    return this.http.post(
      this.API_NODE_TOKEN + 'post/update/' + id,
      JSON.stringify(post),
      this.addHeaders(),
    );
  }

  addHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('user'),
    });
    return {
      headers,
    };
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.message,
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
