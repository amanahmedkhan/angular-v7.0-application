import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {
	posts = [];
	constructor(private http: Http) {}

  	getPosts = function() {
	    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
	        (res: Response) => {
	            this.posts = res.json();
	        }
	    )
	}
}
