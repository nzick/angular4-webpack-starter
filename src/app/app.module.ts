import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { AppDeclarations } from './declarations';

@NgModule({
  declarations: AppDeclarations,
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  entryComponents: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
