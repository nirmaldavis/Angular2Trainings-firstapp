import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})

export class HighlighterDirective {

  private backgroundColor;



  constructor(el: ElementRef, renderer: Renderer) {

    //work any of these

    // el.nativeElement.style.backgroundColor = "Orange";

     renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

}
