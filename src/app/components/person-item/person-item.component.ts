import { DatePipe, NgClass } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { Person } from '../../models/person.model';
import { PeopleApiService } from '../../services/people-api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-person-item',
  imports: [NgClass, DatePipe, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './person-item.component.html',
  styleUrl: './person-item.component.scss'
})
export class PersonItemComponent {
  person = input.required<Person>();
  isSelected = input<boolean>(false);
  personClick = output<Person>();
  deleteClick = output<Person>();
  personApiService = inject(PeopleApiService);

  oneDeleteClick(event: MouseEvent) {
    event.stopPropagation();
    this.deleteClick.emit(this.person());
  }

  onPersonClick() {
    this.personClick.emit(this.person());
  }
}
