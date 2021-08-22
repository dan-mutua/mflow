import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MfowAppComponent } from './mflow-app.component';

@NgModule({
  declarations: [
    MfowAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MfowAppComponent]
})
export class AppModule { }
