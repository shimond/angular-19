import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PeopleApiService } from './services/people-api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  #peopleApiService = inject(PeopleApiService);
  arr = signal([1]);

  addItem() {
    this.arr.update(current => [...current, current.length + 1]);
  }

  removeItem(item: number) {
    this.arr.update(current => current.filter(i => i != item));
  }
}

