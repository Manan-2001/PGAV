import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrevApplianceButton]'
})
export class PrevApplianceButtonDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  prevFunction() {
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName("item");
    elm.prepend(item[item.length - 1]);
  }

}
