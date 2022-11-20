import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrevFurnitureButton]'
})
export class PrevFurnitureButtonDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  prevFunction() {
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName("item");
    elm.prepend(item[item.length - 1]);
  }
}
