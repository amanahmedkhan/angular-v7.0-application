import { Component } from '@angular/core';
import { PostService } from './../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
    constructor(private postService: PostService) {}

  	title = 'Post List';

    deletePost = function(id) {
        if(confirm ("Are you sure?")) {
            this.postService.posts = this.postService.posts.filter(post => post.id !== id);
        }
    }
}