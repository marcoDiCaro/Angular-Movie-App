import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = []; // Lista Filtrata
  allMovies: any[] = []; //Lista originale

  p: number = 1; // pagina corrente

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.moviesService.getMovies().subscribe({
      next: (movies) => {
        this.movies = movies.map((movie: any) => ({
          ...movie,
          Poster: movie.Poster?.replace(/^http:/, 'https:'),
        }));
        this.allMovies = [...this.movies];
      },
      error: (error) =>
        console.error('Errore nel caricamento dei movies:', error),
    });
  }

  receiveFilterData(data: any[]) {
    this.movies = data; // Riceve il valore dal figlio
  }
}
