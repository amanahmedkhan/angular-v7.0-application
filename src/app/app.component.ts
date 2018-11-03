import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  template: `<app-post [posts]='posts'></app-post>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'application';

  constructor(private http: Http) {}

    id:number;
    private headers = new Headers({ 'Content-Type': 'application/json' })

    posts = [];
    fetchData = function() {
        this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
            (res: Response) => {
                this.posts = res.json();
            }
        )
    }

    ngOnInit() {
        this.fetchData();
    }
}
