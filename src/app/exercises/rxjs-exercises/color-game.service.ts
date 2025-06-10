import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ColorGameService {
  #red = new BehaviorSubject(0);
  #green = new BehaviorSubject(0);
  #blue = new BehaviorSubject(0);

  red$ = this.#red.asObservable();
  green$ = this.#green.asObservable();
  blue$ = this.#blue.asObservable();

  color$ = combineLatest([this.red$, this.green$, this.blue$]);

  setRed(v: number) { this.#red.next(v); }
  setGreen(v: number) { this.#green.next(v); }
  setBlue(v: number) { this.#blue.next(v); }

  randomizeColor() {
    this.setRed(Math.floor(Math.random() * 256));
    this.setGreen(Math.floor(Math.random() * 256));
    this.setBlue(Math.floor(Math.random() * 256));
  }
}
