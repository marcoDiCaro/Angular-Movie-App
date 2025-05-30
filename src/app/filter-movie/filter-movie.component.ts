import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-movie',
  templateUrl: './filter-movie.component.html',
  styleUrls: ['./filter-movie.component.css'],
})
export class FilterMovieComponent implements OnInit {
  @Input() movies: any[] | undefined;

  @Output() filterEvent = new EventEmitter<any[]>(); // Creiamo un evento Output

  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchMovie(event: Event) {
    const search: String = (event.target as HTMLInputElement).value;
    this.router.navigate(['/movie', search]); // Naviga con un parametro dinamico
  }

  changeTypeMovie(event: Event) {
    const filter: String = (event.target as HTMLInputElement).value;
    const moviesFilter = this.movies?.filter(
      (movie) => movie.Type === filter
    );
    this.filterEvent.emit(moviesFilter);
  }
}
