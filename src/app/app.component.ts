import { Component, signal } from '@angular/core';
import { CounterComponent } from "./components/counter/counter.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { Person } from './models/person.model';
import { PeopleApiService } from './services/people-api.service';

@Component({
  selector: 'app-root',
  imports: [PersonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  constructor(private peopleApiService: PeopleApiService) {
    this.employees.set(this.peopleApiService.getEmployees());
    this.customers.set(this.peopleApiService.getCustomers());
  }

  employees = signal<Person[]>([]);
  customers = signal<Person[]>([]);

  
  onButtonClick(e: any) {
    //this.peopleApiService
    console.log('Button was clicked', e);
  }

}

