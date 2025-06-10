import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from './question.model';

const QUESTIONS: Question[] = [
  { id: 1, questionText: 'Capital of France?', options: ['Paris','Rome'], correctAnswer: 'Paris' },
  { id: 2, questionText: '2+2?', options: ['3','4'], correctAnswer: '4' }
];

@Injectable({ providedIn: 'root' })
export class ExamService {
  #questions = new BehaviorSubject<Question[]>(QUESTIONS);
  questions$ = this.#questions.asObservable();

  answer(id: number, answer: string) {
    const updated = this.#questions.value.map(q => q.id === id ? { ...q, userAnswer: answer } : q);
    this.#questions.next(updated);
  }
}
