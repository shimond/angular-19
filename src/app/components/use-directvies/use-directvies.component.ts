import { NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-use-directvies',
  imports: [NgStyle],
  templateUrl: './use-directvies.component.html',
  styleUrl: './use-directvies.component.scss'
})
export class UseDirectviesComponent {

  numbers = signal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 88, 54, 32, 77, 99]);

}
