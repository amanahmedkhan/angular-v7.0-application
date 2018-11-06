import { Component, OnInit } from '@angular/core';
import { PostService } from './../post.service';
import { Validation }    from '../Validation';

@Component({
	selector: 'app-update',
	templateUrl: './update.component.html',
	styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

	constructor(private postService: PostService) {}

	// Update Post Function
	updatePost = (updatedPost, postId) => {
		const postToUpdate = this.postService.posts.find(post => post.id === postId);
		const post = Object.assign(postToUpdate, {
			id: postId,
			userId: updatedPost.userId,
			title: updatedPost.title,
			body: updatedPost.body,
		});
		this.postService.posts = this.postService.posts.filter(post => post.id !== postId);
		this.postService.posts = [...this.postService.posts, post];
		return this.postService.posts;
	}

	// Validation Form Function
    updatePostData = new Validation(0, '', '',);
    validForm(){
        this.updatePostData = new Validation(42, '', '');
    }

	ngOnInit() { }
}
