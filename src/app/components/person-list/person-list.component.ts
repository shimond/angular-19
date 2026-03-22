import { Component, computed, inject, input, linkedSignal, signal } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonItemComponent } from '../person-item/person-item.component';
import { UpsertPersonComponent } from "../upsert-person/upsert-person.component";
import { PeoplePageSignalStore } from '../../pages/people-page/people-page-signal-store';

@Component({
  selector: 'app-person-list',
  imports: [PersonItemComponent, UpsertPersonComponent],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent {
  store = inject(PeoplePageSignalStore);
  listTitle = input<string>('People list');
  people = input.required<Person[]>();
  
  // selectedPerson = linkedSignal(()=> this.people().length > 0 ? this.people()[0] : null,);
  selectedPerson = linkedSignal<Person[], Person| null>({
    source: this.people,
    computation:(people, prev)=>{
      if(prev?.value){
        const isThere = people.findIndex(p => p.id === prev.value?.id ) !== -1;
        if(isThere){
          return prev.value;
        }
      }
      
      return people.length > 0 ? people[0] : null;
    }
  });

  
  selectPerson(person: Person | null) {
    this.selectedPerson.set(person);
  }

  deletePerson(person: Person) {
    this.store.deletePerson(person);
  }

  updatePerson(person: Person) {
    this.store.updatePerson(person);
  }
}
