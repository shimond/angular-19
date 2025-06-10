import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-image-list',
  standalone: true,
  templateUrl: './image-list.component.html'
})
export class ImageListComponent {
  images = input([] as string[]);
  selected = output<string>();
}
