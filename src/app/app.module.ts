import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MovieService } from './popular-movies/movies.service';
import { FormsModule } from '@angular/forms';
import {MatButtonModule,MatFormFieldModule,MatSelectModule,MatOptionModule} from '@angular/material';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';

const routes: Routes = [
  { path: '', component: PopularMoviesComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [
    MovieService,
  ],
  bootstrap: [AppComponent],
  exports: [
    RouterModule,
    MatOptionModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
  ]
})
export class AppModule { }
