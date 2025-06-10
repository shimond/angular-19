import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { Observable, of } from 'rxjs';

const MOVIES: Movie[] = [
  {
    id: 1,
    title: 'Inception',
    description: 'Dream thieves.',
    posterImage: 'https://m.media-amazon.com/images/I/51s+9xX7pqL._AC_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt1375666/',
    durationMinutes: 148,
    genre: ['Action','Sci-Fi'],
    rating: 8.8
  },
  {
    id: 2,
    title: 'The Matrix',
    description: 'What is real?',
    posterImage: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0133093/',
    durationMinutes: 136,
    genre: ['Action','Sci-Fi'],
    rating: 8.7
  }
];

@Injectable({ providedIn: 'root' })
export class MovieService {
  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }
}
