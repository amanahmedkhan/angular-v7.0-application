import { Component } from '@angular/core';
import { PostService } from './../post.service';

import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './../modal/modal.component';
import { NewpostComponent } from './../newpost/newpost.component';
import { UpdateComponent } from './../update/update.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
    constructor(private postService: PostService, private modalService: NgbModal) {}

  	title = 'Post List';

    deletePost = function(id) {
        if(confirm ("Are you sure?")) {
            this.postService.posts = this.postService.posts.filter(post => post.id !== id);
        }
    }

    addPostModal() {
      const modalRef = this.modalService.open(NewpostComponent);
      modalRef.componentInstance.title = 'Add New Post';
    }

    updatePostModal() {
      const modalRef = this.modalService.open(UpdateComponent);
      modalRef.componentInstance.title = 'Update Post';
    }
}