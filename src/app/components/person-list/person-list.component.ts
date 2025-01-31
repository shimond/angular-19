import { Component, input, signal } from '@angular/core';
import { Person } from '../../models/person.model';
import { DatePipe, NgClass } from '@angular/common';
import { PersonItemComponent } from '../person-item/person-item.component';

@Component({
  selector: 'app-person-list',
  imports: [PersonItemComponent],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent {

  listTitle = input<string>('People list');
  people = input.required<Person[]>();

  selectedPerson = signal<Person | null>(null);

  selectPerson(person: Person) {
    if (person.name[0] != 'S') {
      this.selectedPerson.set(person);
    } else{
      alert('Person name starts with S. Cannot select');
      this.selectedPerson.set(null);
    }
  }

}
