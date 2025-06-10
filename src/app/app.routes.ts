import { Routes } from '@angular/router';
import { PeoplePageComponent } from './pages/people-page/people-page.component';
import { GalleryComponent } from './exercises/input-output-exercise/gallery.component';
import { TravelFormComponent } from './exercises/forms-exercise/travel-form.component';
import { MovieListComponent } from './exercises/movie-explorer-exercise/movie-list.component';
import { ExamComponent } from './exercises/services-exam-exercise/exam.component';

export const routes: Routes = [
  { path: 'People', component: PeoplePageComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'travel-form', component: TravelFormComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'exam', component: ExamComponent },
  { path: '', redirectTo: 'gallery', pathMatch: 'full' }
];
