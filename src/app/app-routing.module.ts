import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:name', component: MovieDetailsComponent } // Rotta dinamica
];

@NgModule({
  declarations: [],
  imports: [CommonModule, [RouterModule.forRoot(routes)]],
  exports: [RouterModule],
})
export class AppRoutingModule {}
