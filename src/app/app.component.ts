import { Component, inject, signal } from '@angular/core';
import { CounterComponent } from "./components/counter/counter.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { Person } from './models/person.model';
import { PeopleApiService } from './services/people-api.service';
import { PeoplePageComponent } from "./pages/people-page/people-page.component";
import { UpsertPersonComponent } from "./components/upsert-person/upsert-person.component";

@Component({
  selector: 'app-root',
  imports: [UpsertPersonComponent],
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

