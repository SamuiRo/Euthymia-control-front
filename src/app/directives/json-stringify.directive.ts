import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appJsonStringify]',
  standalone: true,
})
export class JsonStringifyDirective implements OnInit {
  @Input('appJsonStringify') jsonData: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.updateContent();
  }

  private updateContent() {
    const jsonString = JSON.stringify(this.jsonData, null, 2);
    this.renderer.setProperty(this.el.nativeElement, 'textContent', jsonString);
  }
}
