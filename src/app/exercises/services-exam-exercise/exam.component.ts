import { Component, computed, inject, signal, effect, OnDestroy } from '@angular/core';
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
export class ExamComponent implements OnDestroy {
  #service = inject(ExamService);
  questions = this.#service.questions;
  score = this.#service.score;
  timeLeft = this.#service.timeLeft;
  examOver = this.#service.examOver;
  selectedId = signal<number | null>(null);

  formattedTime = computed(() => {
    const t = this.timeLeft();
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  });

  selectedQuestion = computed(() =>
    this.questions().find(q => q.id === this.selectedId()) ?? null
  );

  constructor() {
    const first = this.questions()[0];
    if (first) this.selectedId.set(first.id);
    this.#service.startExam();
    effect(() => {
      if (this.examOver()) {
        alert(`Your score is ${this.score()} / ${this.questions().length}`);
      }
    });
  }

  ngOnDestroy(): void {
    this.#service.stopTimer();
  }

  select(id: number) {
    this.selectedId.set(id);
  }

  answer({ id, answer }: { id: number; answer: string }) {
    this.#service.answer(id, answer);
  }
}
