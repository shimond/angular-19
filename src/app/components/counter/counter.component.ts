import { Component, computed, effect, inject, signal } from '@angular/core';
import { CounetStore } from '../../store/counter-store';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  store = inject(CounetStore);
  constructor() {
  }

}
