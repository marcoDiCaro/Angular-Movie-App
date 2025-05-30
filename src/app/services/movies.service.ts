import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  // Metodo GET per recuperare i dati
  getMovies(): Observable<any> {
    const apiUrl = 'https://www.apirequest.in/movie/api'; // URL API
    return this.http.get(apiUrl);
  }

  getMovieByName(name: string): Observable<any> {
    const apiUrl = 'https://www.apirequest.in/movie/api/title';
    return this.http.get<any>(`${apiUrl}/${name}`);
  }
}
