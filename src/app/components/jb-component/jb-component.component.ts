import { Component, signal } from '@angular/core';
import { MyPanelComponent } from '../my-panel/my-panel.component';

@Component({
  selector: 'app-jb-component', // name of tag to use in HTML
  imports: [MyPanelComponent],
  templateUrl: './jb-component.component.html',
  styleUrl: './jb-component.component.scss'
})
export class JbComponentComponent {
  title = signal('WOW!');
  value = signal(0);
  isMyPanelVisible = signal(false);
  isChangeDisabled = signal(false);

  names = signal(['John', 'Doe', 'Jane', 'Doe', 'Namma', 'Shimon', 'David', 'Tikva']);

  constructor() {

  }

  toggleMyPanel() {
    this.isMyPanelVisible.update(currentValue => !currentValue);
  }

  changeTitle() {
    this.title.set('new Title');
    this.isChangeDisabled.set(true);
  }

  plus(){
    this.value.update(currentValue => currentValue + 1);
  }
}
