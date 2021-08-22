import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MfowAppComponent } from './mflow-app.component';
import { CommentsComponent } from './comments/comments.component';
import { NavComponent } from './nav/nav.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule }  from '@angular/material/icon'


@NgModule({
  declarations: [
    MfowAppComponent,
    CommentsComponent,
    NavComponent,
    AddQuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [
    MfowAppComponent,
    CommentsComponent,
    NavComponent,
    AddQuoteComponent,
   
  ],
})
export class AppModule {}
