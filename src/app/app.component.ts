import { Component } from '@angular/core';
import { UseDirectviesComponent } from "./components/use-directvies/use-directvies.component"; // without ts suffix

@Component({
  selector: 'app-root',
  imports: [UseDirectviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

