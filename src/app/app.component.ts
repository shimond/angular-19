import { Component, signal } from '@angular/core';
import { CounterComponent } from "./components/counter/counter.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { Person } from './models/person.model';
import { PeopleApiService } from './services/people-api.service';
import { PeoplePageComponent } from "./pages/people-page/people-page.component";

@Component({
  selector: 'app-root',
  imports: [PeoplePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  
  onButtonClick(e: any) {
    //this.peopleApiService
    console.log('Button was clicked', e);
  }

}

