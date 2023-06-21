import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirection]'
})
export class DirectionDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    if(this.element.nativeElement.getAttribute("appDirection") === "right") this.renderer.setStyle(this.element.nativeElement, "right", "25px")
    else this.renderer.setStyle(this.element.nativeElement, "left", "25px")
  }
}
