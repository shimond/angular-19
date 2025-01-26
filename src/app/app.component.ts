import { Component, signal } from '@angular/core';
import { UseDirectviesComponent } from "./components/use-directvies/use-directvies.component";
import { PersonListComponent } from "./components/person-list/person-list.component"; // without ts suffix
import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [PersonListComponent, LowerCasePipe, UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name =  signal('sHiMoN');
  price = signal(12.8);
  birthdate = signal(new Date());
}

