import { Component, inject, input, signal } from '@angular/core';
import { Person } from '../../models/person.model';
import { DatePipe, NgClass } from '@angular/common';
import { PersonItemComponent } from '../person-item/person-item.component';
import { PeopleApiService } from '../../services/people-api.service';
import { PeoplePageStore } from '../../pages/people-page/people-page-store.service';
import { UpsertPersonComponent } from "../upsert-person/upsert-person.component";

@Component({
  selector: 'app-person-list',
  imports: [PersonItemComponent, UpsertPersonComponent],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent {
  state = inject(PeoplePageStore);
  listTitle = input<string>('People list');
  people = input.required<Person[]>();
  selectedPerson = signal<Person | null>(null);

  selectPerson(person: Person) {
    this.selectedPerson.set(person);
  }

  deletePerson(person: Person) {
    alert(`Deleting ${person.name}`);
    this.state.deletePerson(person);
  }

  updatePerson(person: Person) {
    this.state.updateUpdate(person);
  }
}
