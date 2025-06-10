import { Injectable, computed, signal } from '@angular/core';
import { Question } from './question.model';

const QUESTIONS: Question[] = [
  { id: 1, questionText: 'Capital of France?', options: ['Paris','Rome'], correctAnswer: 'Paris' },
  { id: 2, questionText: '2+2?', options: ['3','4'], correctAnswer: '4' }
];

@Injectable({ providedIn: 'root' })
export class ExamService {
  #questions = signal<Question[]>(QUESTIONS);

  questions = this.#questions.asReadonly();

  score = computed(() =>
    this.#questions()
      .filter(q => q.userAnswer && q.userAnswer === q.correctAnswer)
      .length
  );

  answer(id: number, answer: string) {
    this.#questions.update(qs =>
      qs.map(q => (q.id === id ? { ...q, userAnswer: answer } : q))
    );
  }
}
