import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PeopleApiService } from './services/people-api.service';
import { CounetStore } from './store/counter-store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  #peopleApiService = inject(PeopleApiService);
  store = inject(CounetStore);
  counterValue = this.store.value;
  arr = signal([1]);

  addItem() {
    this.arr.update(current => [...current, current.length + 1]);
  }

  removeItem(item: number) {
    this.arr.update(current => current.filter(i => i != item));
  }
}

