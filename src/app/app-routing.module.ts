import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { NewpostComponent } from './newpost/newpost.component';

const routes: Routes = [
	{ path: '', component: PostComponent },
	{ path: 'addnewpost', component: NewpostComponent }
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
