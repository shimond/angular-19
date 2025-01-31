import { Component, inject, signal } from '@angular/core';
import { PeopleApiService } from '../../services/people-api.service';
import { Person } from '../../models/person.model';
import { PersonListComponent } from "../../components/person-list/person-list.component";

@Component({
  selector: 'app-people-page',
  imports: [PersonListComponent],
  templateUrl: './people-page.component.html',
  styleUrl: './people-page.component.scss'
})
export class PeoplePageComponent {

  #peopleApiService = inject(PeopleApiService);
  
  employees = signal<Person[]>([]);
  customers = signal<Person[]>([]);

  constructor() {
    this.employees.set(this.#peopleApiService.getEmployees());
    this.customers.set(this.#peopleApiService.getCustomers());
  }

  


}
