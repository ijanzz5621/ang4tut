import { element } from 'protractor';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlueColor]'
})
export class BlueColorDirective {

  constructor(el: ElementRef) {
    // console.log(el);
    el.nativeElement.style.color = 'blue';
  }

  @HostListener('click') doSomething() {
    alert('It\'s works');
  }

  @HostListener('mouseenter') mouseEnterEvent() {
    console.log('mouse entering...');
  }

  @HostListener('mouseleave') mouseLeaveEvent() {
    console.log('mouse leaving...');
  }

  @HostListener('document:click', ['$event']) elemClick(elem) {
    console.log('clicked', elem);
  }

}
