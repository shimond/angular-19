import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from './question.model';

@Component({
  selector: 'app-question-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-detail.component.html',
  styleUrl: './question-detail.component.css'
})
export class QuestionDetailComponent {
  question = input<Question | null>(null);
  answer = output<{ id: number; answer: string }>();
  disabled = input(false);

  choose(option: string) {
    const q = this.question();
    if (q && !this.disabled()) {
      this.answer.emit({ id: q.id, answer: option });
    }
  }
}
