import { Component } from '@angular/core';
import { JbComponentComponent } from './components/jb-component/jb-component.component'; // without ts suffix

@Component({
  selector: 'app-root',
  imports: [JbComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

