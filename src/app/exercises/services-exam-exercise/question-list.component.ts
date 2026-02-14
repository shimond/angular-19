import { Component, input, output } from '@angular/core';

import { Question } from './question.model';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent {
  questions = input<Question[]>([]);
  selectedId = input<number | null>(null);
  disabled = input(false);
  select = output<number>();
}
