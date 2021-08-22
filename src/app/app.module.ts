import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MfowAppComponent } from './mflow-app.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    MfowAppComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MfowAppComponent, CommentsComponent]
})
export class AppModule { }
