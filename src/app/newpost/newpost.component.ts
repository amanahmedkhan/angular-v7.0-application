import { Component } from '@angular/core';
import { PostService } from './../post.service';
import { Validation }    from '../Validation';

@Component({
    selector: 'app-newpost',
    templateUrl: './newpost.component.html',
    styleUrls: ['./newpost.component.scss']
})

export class NewpostComponent {
    constructor(private postService: PostService) {}
    
    // Add New Post
    submitted = false;
    confirmationString:string = "Successfully new post has been added";
    isAdded: boolean = false;
    addNewPost = function({ userId, title, body }) {
        const lastItem = this.postService.posts[this.postService.posts.length-1];
        this.postService.posts.push({
            id: lastItem.id + 1,
            userId,
            title,
            body
        });
        this.submitted = true;
        this.isAdded = true;
    }

    // Validation Form Function
    model = new Validation(0, '', '',);
    validForm(){
        this.model = new Validation(42, '', '');
    }
}
