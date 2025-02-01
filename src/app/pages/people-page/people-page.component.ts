import { Component, inject, OnDestroy, signal } from '@angular/core';
import { PeopleApiService } from '../../services/people-api.service';
import { Person } from '../../models/person.model';
import { PersonListComponent } from "../../components/person-list/person-list.component";
import { PeoplePageStore } from './people-page-store.service';

@Component({
  selector: 'app-people-page',
  imports: [PersonListComponent],
  templateUrl: './people-page.component.html',
  styleUrl: './people-page.component.scss'
})
export class PeoplePageComponent  {

  state = inject(PeoplePageStore);  
  
  constructor() {
    this.state.init();
  }

 
}
