import { DatePipe, NgClass } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { Person } from '../../models/person.model';
import { PeopleApiService } from '../../services/people-api.service';

@Component({
  selector: 'app-person-item',
  imports: [NgClass, DatePipe],
  templateUrl: './person-item.component.html',
  styleUrl: './person-item.component.scss'
})
export class PersonItemComponent {
  person = input.required<Person>();
  isSelected = input<boolean>(false);
  personClick = output<Person>();
  personApiService = inject(PeopleApiService);


  onPersonClick() {
    this.personClick.emit(this.person());
  }
}
