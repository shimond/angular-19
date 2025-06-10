import { Component, signal } from '@angular/core';
import { ImageListComponent } from './image-list.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageListComponent],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  images = [
    'https://placekitten.com/300/200',
    'https://placekitten.com/301/200',
    'https://placekitten.com/302/200'
  ];
  selected = signal(this.images[0]);

  select(url: string) {
    this.selected.set(url);
  }
}
