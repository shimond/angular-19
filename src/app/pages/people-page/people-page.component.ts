import { Component, inject, OnDestroy, signal } from '@angular/core';
import { PeopleApiService } from '../../services/people-api.service';
import { Person } from '../../models/person.model';
import { PersonListComponent } from "../../components/person-list/person-list.component";

@Component({
  selector: 'app-people-page',
  imports: [PersonListComponent],
  templateUrl: './people-page.component.html',
  styleUrl: './people-page.component.scss',
  providers: [{ provide: PeopleApiService, useClass: PeopleApiService }]
})
export class PeoplePageComponent implements OnDestroy {

  #peopleApiService = inject(PeopleApiService);

  employees = signal<Person[]>([]);
  customers = signal<Person[]>([]);

  constructor() {
    this.employees.set(this.#peopleApiService.getEmployees());
    this.customers.set(this.#peopleApiService.getCustomers());
  }

  ngOnDestroy(): void {
    console.log('PeoplePageComponent destroyed');
  }
}
