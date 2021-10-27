import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  constructor(element: ElementRef, render: Renderer2) {
    render.setStyle(element.nativeElement, 'color', 'red');
    for (let i = 5; i < 50; i++) {
      setTimeout(() => {
        render.setStyle(element.nativeElement, 'font-size', i + "px");
        console.log(i);
      }, 2000);

    }
  }

}
