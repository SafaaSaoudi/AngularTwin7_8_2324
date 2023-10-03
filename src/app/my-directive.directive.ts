import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
 
  constructor(private elemnt:ElementRef) {
    // this.elemnt.nativeElement.style.color="red";
   }
@HostListener('mouseenter') mouseEnter(){
  this.elemnt.nativeElement.style.color="red";
  this.elemnt.nativeElement.style.background="yellow";
}

@HostListener('mouseleave') mouseLeave(){
  this.elemnt.nativeElement.style.color="balck";
  this.elemnt.nativeElement.style.background="white";
}
}
