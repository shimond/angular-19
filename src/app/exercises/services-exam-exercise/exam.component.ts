import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamService } from './exam.service';
import { QuestionListComponent } from './question-list.component';
import { QuestionDetailComponent } from './question-detail.component';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule, QuestionListComponent, QuestionDetailComponent],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {
  #service = inject(ExamService);
  questions = this.#service.questions;
  score = this.#service.score;
  selectedId = signal<number | null>(null);

  selectedQuestion = computed(() =>
    this.questions().find(q => q.id === this.selectedId()) ?? null
  );

  constructor() {
    const first = this.questions()[0];
    if (first) this.selectedId.set(first.id);
  }

  select(id: number) {
    this.selectedId.set(id);
  }

  answer({ id, answer }: { id: number; answer: string }) {
    this.#service.answer(id, answer);
  }
}
