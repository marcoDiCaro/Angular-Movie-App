import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterMovieComponent } from './filter-movie/filter-movie.component';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent,
    FilterMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }