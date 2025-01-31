import { Component, signal } from '@angular/core';
import { CounterComponent } from "./components/counter/counter.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { Person } from './models/person.model';

@Component({
  selector: 'app-root',
  imports: [PersonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  employees = signal<Person[]>(
    [
      { id: 1, name: 'John Cohen', email: 'jc@gmail.com', birthdate: new Date('1954-05-04') },
      { id: 2, name: 'Jane Doe', email: 'Jd@gmail.com', birthdate: new Date('1990-02-15') },
      { id: 3, name: 'David Levi', email: 'Dl@gmail.com', birthdate: new Date('1980-12-25') },
      { id: 4, name: 'Tikva Cohen', email: 'tc@gmail.com', birthdate: new Date('1995-05-04') }
    ]);

  customers = signal<Person[]>([
    { id: 5, name: 'Shimon Levi', email: 'sl@gmail.com', birthdate: new Date('1975-02-15') },
    { id: 6, name: 'Namma Dahan', email: 'Nd@gmail.com', birthdate: new Date('1980-12-25') },
    { id: 7, name: 'Moshe Lavi', email: 'ml@gmail.com', birthdate: new Date('2005-05-04') }]
  );

  onButtonClick(e: any) {
    console.log('Button was clicked', e);
  }

}

