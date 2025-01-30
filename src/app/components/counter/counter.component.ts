import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  //signal, (), update, set, effect
  value = signal(0);
  value2 = computed(() => this.value() * 2);

  constructor() {
    effect(()=>{
      console.log('Value changed to:', this.value());
      sessionStorage.setItem('value', this.value().toString());
    });    
  }

  increment() {
    this.value.update(current => current + 1);
  }

  decrement() {
    this.value.update(current => current - 1);
  }
}
