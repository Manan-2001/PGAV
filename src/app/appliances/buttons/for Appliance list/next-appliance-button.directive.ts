import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNextApplianceButton]'
})
export class NextApplianceButtonDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFuction() {
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName("item");
    elm.append(item[0]);
  }
}