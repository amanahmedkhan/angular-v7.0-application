import { Component } from '@angular/core';
import { PostService } from './../post.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './../modal/modal.component';
import { ModalupdateComponent } from './../modalupdate/modalupdate.component';
import { ModalwrapComponent } from './../modalwrap/modalwrap.component';

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
        const modalRef = this.modalService.open(ModalwrapComponent);
        modalRef.componentInstance.title = 'Add New Post';
    }

    //Modal for Update Post
    updatePostModal() {
        const modalRef = this.modalService.open(ModalupdateComponent);
        modalRef.componentInstance.title = 'Update Post';
    }
}