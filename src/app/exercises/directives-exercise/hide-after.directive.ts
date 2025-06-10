import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[hideAfter]'
})
export class HideAfterDirective {
  @Input('hideAfter') delay = 5000;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('click') onClick() {
    const element = this.el.nativeElement;
    setTimeout(() => element.style.display = 'none', this.delay);
  }
}
