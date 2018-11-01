import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	
  	title = 'Post List';
  	readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
	posts: any;
	constructor(private http: HttpClient) {}

  	ngOnInit() {
  	    this.posts = this.http.get(this.ROOT_URL + '/posts')
    }

}
