import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Event } from '@angular/router';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  //   @HostBinding('class.open') isOpen = false;
  //   constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  //   ngOnInit() {}
  //   @HostListener('click') click(eventData: Event) {
  //     this.isOpen = !this.isOpen;
  //   }
}
