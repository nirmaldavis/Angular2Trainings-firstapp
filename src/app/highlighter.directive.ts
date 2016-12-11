import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
  // inputs: ['highLightColor']
})

export class HighlighterDirective {

 @Input('highLightColor') highLightColor = 'green';

  // private highLightColor:String ;


  private backgroundColor : String;

  @HostListener('mouseenter') onMouseEnterEventFunction() {
    console.log("Mouse Entered ..!! " + this.highLightColor);
    this.backgroundColor = this.highLightColor;
  }

  // constructor(el: ElementRef, renderer: Renderer) {

  //   //work any of these

  //   // el.nativeElement.style.backgroundColor = "Orange";

  //   //  renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  // }

}
