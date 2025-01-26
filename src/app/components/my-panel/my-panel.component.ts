import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-panel',
  imports: [],
  templateUrl: './my-panel.component.html',
  styleUrl: './my-panel.component.scss'
})
export class MyPanelComponent implements OnDestroy {

  constructor() {
    console.log('MyPanelComponent created');
  }

  ngOnDestroy(): void {
    console.log('MyPanelComponent destroyed');
  }
}
