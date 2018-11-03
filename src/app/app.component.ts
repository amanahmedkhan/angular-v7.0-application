import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent implements OnInit {
  title = 'application';

  constructor(private postService: PostService) {}
    ngOnInit() {
        this.postService.getPosts();
    }
}
