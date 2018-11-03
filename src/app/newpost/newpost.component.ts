import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

    constructor(private http: Http) {}

    confirmationString:string = "New Post Has been added"
    inAdded: boolean = false;
    newPost:object = {};
    private headers = new Headers({ 'Content-Type': 'application/json' })

    addNewPost = function(post) {
        console.log(post, 'addewPost');
        this.newPost = JSON.stringify({
            // "id": post.id,
            userId: post.userid,
            title: post.title,
            body: post.body
        })
        return this.http.post(
            "https://jsonplaceholder.typicode.com/posts",
            this.newPost,
            this.headers
        ).subscribe((res: Response) => {
            console.log(res);
            this.isAdded = true;
        })
    }

    ngOnInit() {
    }

}
