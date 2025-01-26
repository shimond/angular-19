import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-jb-component', // name of tag to use in HTML
  imports: [],
  templateUrl: './jb-component.component.html',
  styleUrl: './jb-component.component.scss'
})
export class JbComponentComponent {
  title = signal('WOW!');
  value = signal(0);
  isChangeDisabled = signal(false);
  constructor() {

  }

  changeTitle() {
    // this.title = 'new Title';
    this.title.set('new Title');
    // this.isChangeDisabled = true;
    this.isChangeDisabled.set(true);
  }

  plus(){
    // const currentValue = this.value();
    // this.value.set(currentValue + 1);
    this.value.update(currentValue => currentValue + 1);
  }
}
