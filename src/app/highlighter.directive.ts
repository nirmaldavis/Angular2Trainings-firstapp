import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})

export class HighlighterDirective {

  private backgroundColor : String;

  @HostListener('mouseenter') onMouseEnterEventFunction() {
    console.log("Mouse Entered ..!!");
  }

  constructor(el: ElementRef, renderer: Renderer) {

    //work any of these

    // el.nativeElement.style.backgroundColor = "Orange";

    //  renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

}
