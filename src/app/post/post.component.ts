import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  	title = 'Post List';
    @Input() posts: Array;

    deletePost = function(id) {
        if(confirm ("Are you sure?")) {
            this.posts = this.posts.filter(post => post.id !== id);
        }
    }
}