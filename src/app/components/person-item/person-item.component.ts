import { DatePipe, NgClass } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { Person } from '../../models/person.model';

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

  onPersonClick(){
    this.personClick.emit(this.person());
  }
}
