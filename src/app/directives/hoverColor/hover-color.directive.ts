import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {

  // @Input() defaultColor: string = 'black'; // Default text color
  // @Input() hoverColor: string = 'orange';    // Color on hover

  defaultColor = input<string>('black');
  hoverColor = input<string>('orange');

  constructor(private el: ElementRef) {
    this.setColor(this.defaultColor());  // Set initial color
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.hoverColor());  // Change to hover color on mouse enter
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(this.defaultColor());  // Change back to default color on mouse leave
  }

  private setColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
