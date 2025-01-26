import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-use-directvies',
  imports: [NgStyle, NgClass],
  templateUrl: './use-directvies.component.html',
  styleUrl: './use-directvies.component.scss'
})
export class UseDirectviesComponent {

  numbers = signal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 88, 54, 32, 77, 99]);
  colors = signal(['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'gray', 'cyan', 'lime', 'teal']);


}
