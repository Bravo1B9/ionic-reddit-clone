import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public posts: Post[] = [];

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://3000-bravo1b9-ionicredditclo-3zfnlcbm765.ws-eu93.gitpod.io/posts');
  }

}