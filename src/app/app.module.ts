import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './components/app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
  ],
})
export class AppModule {}
