import { Component, signal } from '@angular/core';
import { Person } from '../../models/person.model';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-person-list',
  imports: [NgClass, DatePipe],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent {
 
  people = signal<Person[]>([
    { id: 1, name: 'John Cohen', email: 'jc@gmail.com', birthdate: new Date('1954-05-04')},
    { id: 2, name: 'Jane Doe', email: 'Jd@gmail.com', birthdate: new Date('1990-02-15')},
    { id: 3, name: 'David Levi', email: 'Dl@gmail.com', birthdate: new Date('1980-12-25')},
    { id: 4, name: 'Tikva Cohen', email: 'tc@gmail.com', birthdate: new Date('1995-05-04')},
    { id: 5, name: 'Shimon Levi', email: 'sl@gmail.com', birthdate: new Date('1975-02-15')},
    { id: 6, name: 'Namma Dahan', email: 'Nd@gmail.com', birthdate: new Date('1980-12-25')},
    { id: 7, name: 'Moshe Lavi', email: 'ml@gmail.com', birthdate: new Date('2005-05-04')},
    { id: 8, name: 'Yael Levi', email: 'Yl@gmail.com', birthdate: new Date('1975-02-15')},
    { id: 9, name: 'Ruth Cohen', email: 'Rc@gmail.com', birthdate: new Date('2012-12-25')}
  ]);

  selectedPerson = signal<Person | null>(null);

  selectPerson(person: Person) {
    this.selectedPerson.set(person);
  }

}
