import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { Observable, of } from 'rxjs';

const MOVIES: Movie[] = [
  {
    id: 1,
    title: 'Inception',
    description: 'Dream thieves.',
    posterImage: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
    imdbLink: 'https://www.imdb.com/title/tt1375666/',
    durationMinutes: 148,
    genre: ['Action', 'Sci-Fi'],
    rating: 8.8
  },
  {
    id: 2,
    title: 'The Matrix',
    description: 'What is real?',
    posterImage: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0133093/',
    durationMinutes: 136,
    genre: ['Action', 'Sci-Fi'],
    rating: 8.7
  },
  {
    id: 3,
    title: 'Interstellar',
    description: 'A journey beyond the stars to save humanity.',
    posterImage: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0816692/',
    durationMinutes: 169,
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    rating: 8.6
  },
  {
    id: 4,
    title: 'The Dark Knight',
    description: 'Batman faces the Joker in Gotham City.',
    posterImage: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0468569/',
    durationMinutes: 152,
    genre: ['Action', 'Crime', 'Drama'],
    rating: 9.0
  },
  {
    id: 5,
    title: 'Forrest Gump',
    description: 'Life is like a box of chocolates.',
    posterImage: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0109830/',
    durationMinutes: 142,
    genre: ['Drama', 'Romance'],
    rating: 8.8
  },
  {
    id: 7,
    title: 'The Shawshank Redemption',
    description: 'Hope can set you free.',
    posterImage: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0111161/',
    durationMinutes: 142,
    genre: ['Drama'],
    rating: 9.3
  }
];


@Injectable({ providedIn: 'root' })
export class MovieService {
  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }
}
