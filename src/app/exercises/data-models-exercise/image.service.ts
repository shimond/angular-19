import { Injectable } from '@angular/core';
import { Image } from './image.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ImageService {
  #images: Image[] = [
    
    { id: 1, url: 'https://loremflickr.com/200/200/cat', description: 'Random cat' },
    { id: 2, url: 'https://picsum.photos/200/200?random=2', description: 'Abstract placeholder' },
    { id: 3, url: 'https://loremflickr.com/200/200/dog', description: 'Random dog' },
    { id: 4, url: 'https://picsum.photos/200/200?random=4', description: 'Random image' },
    { id: 5, url: 'https://picsum.photos/200/200?random=5', description: 'Random image 5' },
    { id: 6, url: 'https://picsum.photos/200/200?random=6', description: 'Random image 6' },
    { id: 7, url: 'https://loremflickr.com/200/200/bird', description: 'Random bird' },
    { id: 8, url: 'https://loremflickr.com/200/200/nature', description: 'Random nature' }
  ];

  getImages(): Observable<Image[]> {
    return of(this.#images);
  }
}
