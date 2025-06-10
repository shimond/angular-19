import { Component, inject, signal } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ImageService } from './image.service';
import { Image } from './image.model';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent {
  images$ = inject(ImageService).getImages();
   selectedImage = signal<Image | null>(null);

  selectImage(image: Image) {
    this.selectedImage.set(image);
  }
}
