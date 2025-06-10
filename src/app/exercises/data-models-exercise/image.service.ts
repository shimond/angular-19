import { Injectable } from '@angular/core';
import { Image } from './image.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ImageService {
  #images: Image[] = [
    { id: 1, url: 'https://placekitten.com/200/200', description: 'Cute cat' },
    { id: 2, url: 'https://placekitten.com/201/200', description: 'Another cat' }
  ];

  getImages(): Observable<Image[]> {
    return of(this.#images);
  }
}
