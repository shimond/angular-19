import { Component, inject } from '@angular/core';
import { PersonListComponent } from "../../components/person-list/person-list.component";
import { PeoplePageSignalStore } from './people-page-signal-store';

@Component({
  selector: 'app-people-page',
  imports: [PersonListComponent],
  templateUrl: './people-page.component.html',
  styleUrl: './people-page.component.scss'
})
export class PeoplePageComponent  {

  store = inject(PeoplePageSignalStore)
  constructor() {
  }

 
}
