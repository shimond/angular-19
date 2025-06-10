import { Component, signal } from '@angular/core';
import { ImageListComponent } from './image-list.component';
import { Image } from '../data-models-exercise/image.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageListComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images = signal([
     'https://loremflickr.com/200/200/cat',
    'https://picsum.photos/200/200?random=2',
    'https://loremflickr.com/200/200/dog',
    'https://picsum.photos/200/200?random=4'
  ])
  selected = signal(this.images()[0]);

  select(img :string) {
    this.selected.set(img);
  }
}
