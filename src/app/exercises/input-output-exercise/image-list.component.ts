import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-list',
  standalone: true,
  templateUrl: './image-list.component.html'
})
export class ImageListComponent {
  @Input() images: string[] = [];
  @Output() selected = new EventEmitter<string>();
}
