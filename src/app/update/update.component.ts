import { Component, OnInit } from '@angular/core';
import { PostService } from './../post.service';

@Component({
	selector: 'app-update',
	templateUrl: './update.component.html',
	styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

	constructor(private postService: PostService) {}

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

	ngOnInit() {
	    console.log(this);
	}

}
