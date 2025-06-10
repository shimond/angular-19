import { Component, inject, signal } from '@angular/core';
import { MovieService } from './movie.service';
import { DurationPipe } from './duration.pipe';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe, DurationPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies$ = inject(MovieService).getMovies();
  selectedId =  signal(0);
}
