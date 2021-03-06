import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NewpostComponent } from './newpost/newpost.component';
import { UpdateComponent } from './update/update.component';
import { ModalComponent } from './modal/modal.component';
import { ModalwrapComponent } from './modalwrap/modalwrap.component';
import { ModalupdateComponent } from './modalupdate/modalupdate.component';

@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        NewpostComponent,
        UpdateComponent,
        ModalComponent,
        ModalwrapComponent,
        ModalupdateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot()
    ],
    providers: [
        NgbActiveModal
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        ModalwrapComponent,
        ModalupdateComponent
    ]
})
export class AppModule { }
