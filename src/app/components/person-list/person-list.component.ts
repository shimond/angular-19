import { Component, computed, inject, input, linkedSignal, signal } from '@angular/core';
import { Person } from '../../models/person.model';
import { DatePipe, JsonPipe, NgClass } from '@angular/common';
import { PersonItemComponent } from '../person-item/person-item.component';
import { PeopleApiService } from '../../services/people-api.service';
import { PeoplePageStore } from '../../pages/people-page/people-page-store.service';
import { UpsertPersonComponent } from "../upsert-person/upsert-person.component";

@Component({
  selector: 'app-person-list',
  imports: [PersonItemComponent, UpsertPersonComponent, JsonPipe],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent {
  state = inject(PeoplePageStore);
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

  // selectedPerson = signal<Person | null>(null);
  
  selectPerson(person: Person | null) {
    this.selectedPerson.set(person);
  }

  deletePerson(person: Person) {
    alert(`Deleting ${person.name}`);
    this.state.deletePerson(person);
  }

  updatePerson(person: Person) {
    this.state.updateUpdate(person);
    //this.selectPerson(null);
  }
}
