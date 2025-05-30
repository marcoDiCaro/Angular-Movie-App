import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const movieName = params.get('name'); // Ottieni l'ID dalla rotta
      if (movieName) {
        this.loadMovie(movieName);
      }
    });
  }

  loadMovie(movieName: string) {
    this.moviesService.getMovieByName(movieName).subscribe({
      next: (movie) => {
        this.movie = movie[0];
        this.movie.Poster = this.movie.Poster.replace(/^http:/, 'https:');
        console.log(this.movie);
      },
      error: (error) =>
        console.error('Errore nel caricamento del movie:', error),
    });
  }
}
