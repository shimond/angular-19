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
    'https://picsum.photos/200/200?random=5',
    'https://picsum.photos/200/200?random=10',
    'https://picsum.photos/200/200?random=11',
    'https://picsum.photos/200/200?random=12',
    'https://picsum.photos/200/200?random=13',
    'https://picsum.photos/200/200?random=14',
    'https://picsum.photos/200/200?random=15',
    'https://picsum.photos/200/200?random=16',
    'https://picsum.photos/200/200?random=17',

  ])
  selected = signal(this.images()[0]);

  select(img: string) {
    this.selected.set(img);
  }
}
