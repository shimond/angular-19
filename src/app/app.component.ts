import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PeopleApiService } from './services/people-api.service';
import { CounetStore } from './store/counter-store';
import { CounterSignalStore } from './store/counter-signal-store';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  #peopleApiService = inject(PeopleApiService);
  valueFormControl = new FormControl<number>(0);
  store = inject(CounterSignalStore);
  //counterValue = this.store.value;
  arr = signal([1]);

  constructor() {
    this.store.setValue(this.valueFormControl.valueChanges
      .pipe(filter(value => value != null)))
  }

  addItem() {
    this.arr.update(current => [...current, current.length + 1]);
  }

  removeItem(item: number) {
    this.arr.update(current => current.filter(i => i != item));
  }
}

