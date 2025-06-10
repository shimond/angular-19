import { Injectable, computed, signal } from '@angular/core';
import { Question } from './question.model';
const QUESTIONS: Question[] = [
  { id: 1, questionText: 'Capital of France?', options: ['Paris','Rome'], correctAnswer: 'Paris' },
  { id: 2, questionText: '2+2?', options: ['3','4'], correctAnswer: '4' },
  { id: 3, questionText: 'Largest planet in our solar system?', options: ['Jupiter', 'Mars', 'Earth'], correctAnswer: 'Jupiter' },
  { id: 4, questionText: 'Who wrote "Hamlet"?', options: ['Shakespeare', 'Tolstoy', 'Hemingway'], correctAnswer: 'Shakespeare' },
  { id: 5, questionText: 'Chemical symbol for water?', options: ['H2O', 'CO2', 'O2'], correctAnswer: 'H2O' },
  { id: 6, questionText: 'Fastest land animal?', options: ['Cheetah', 'Lion', 'Horse'], correctAnswer: 'Cheetah' },
  { id: 7, questionText: 'Which continent is Egypt in?', options: ['Africa', 'Asia', 'Europe'], correctAnswer: 'Africa' }
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
