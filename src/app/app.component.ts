import { Component, signal } from '@angular/core';
import { CounterComponent } from "./components/counter/counter.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { Person } from './models/person.model';
import { GetPeopleApiService, PeopleApiService } from './services/people-api.service';

@Component({
  selector: 'app-root',
  imports: [PersonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  #peopleApiService: PeopleApiService = GetPeopleApiService();

  employees = signal<Person[]>([]);
  customers = signal<Person[]>([]);

  constructor() {
    this.employees.set(this.#peopleApiService.getEmployees());
    this.customers.set(this.#peopleApiService.getCustomers());
  }

  onButtonClick(e: any) {
    console.log('Button was clicked', e);
  }

}

