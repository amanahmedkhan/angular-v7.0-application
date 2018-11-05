import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateComponent } from './update/update.component';

@Injectable({
  providedIn: 'root'
})

export class PostService {
	posts = [];
	postById = {};
	constructor(private http: Http, private modalService: NgbModal) {}

  	getPosts = function() {
	    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
	        (res: Response) => {
	            this.posts = res.json();
	        }
	    )
	}

	getPostById = function(postId) {
		this.postById = this.posts.find(post => post.id === postId);
		return this.postById;
	}
}
