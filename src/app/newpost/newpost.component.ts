import { Component } from '@angular/core';
import { PostService } from './../post.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent {
    constructor(private postService: PostService) {}

    confirmationString:string = "New Post Has been added"
    inAdded: boolean = false;
    newPost:object = {};

    addNewPost = function({ userId, title, body }) {
        const lastItem = this.postService.posts[this.postService.posts.length-1];
        this.postService.posts.push({
            id: lastItem.id + 1,
            userId,
            title,
            body
        });
    }

}
