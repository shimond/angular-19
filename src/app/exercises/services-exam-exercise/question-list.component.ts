import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from './question.model';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent {
  questions = input<Question[]>([]);
  selectedId = input<number | null>(null);
  select = output<number>();
}
