import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[scrollIntoView]'
})
export class ScrollIntoViewDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    queueMicrotask(() => this.el.nativeElement.scrollIntoView());
  }
}
