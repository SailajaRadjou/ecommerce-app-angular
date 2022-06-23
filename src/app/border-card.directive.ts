import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
    this.setBorder('#DCDCDC', 1);
    this.setHeight(580);
  }

  @Input('appBorderCard') borderCard: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#65000B',2);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#DCDCDC', 1);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
  setBorder(color: string, width: number) {
    let border = 'solid '+ width +'px'+ color;
    this.el.nativeElement.style.border = border;
  }

}
