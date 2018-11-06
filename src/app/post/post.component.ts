import { Component } from '@angular/core';
import { PostService } from './../post.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './../modal/modal.component';
import { NewpostComponent } from './../newpost/newpost.component';
import { UpdateComponent } from './../update/update.component';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent {
    title = 'Post List';

    constructor(private postService: PostService, private modalService: NgbModal) {}

    // Delete Post
    deletePost = function(id) {
        if(confirm ("Are you sure you want to delete?")) {
            this.postService.posts = this.postService.posts.filter(post => post.id !== id);
        }
    }

    // Modal for Add Post
    addPostModal() {
        const modalRef = this.modalService.open(NewpostComponent);
        modalRef.componentInstance.title = 'Add New Post';
    }

    // Modal for Update Post
    updatePostModal() {
        const modalRef = this.modalService.open(UpdateComponent);
        modalRef.componentInstance.title = 'Update Post';
    }
}