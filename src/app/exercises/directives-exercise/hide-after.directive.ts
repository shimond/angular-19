import { Directive, Input, HostListener, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[hideAfter]'
})
export class HideAfterDirective {
  
  delay = input(5000, {alias :'hideAfter'});

  constructor(private el: ElementRef<HTMLElement>) {}
 
  @HostListener('click') onClick() {
    const element = this.el.nativeElement;
    setTimeout(() => element.style.display = 'none', this.delay());
  }
}
