import { Component } from '@angular/core';
import { CounterComponent } from "../components/counter/counter.component";

@Component({
  selector: 'app-counter-page',
  imports: [CounterComponent],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss',
})
export class CounterPageComponent {

}
