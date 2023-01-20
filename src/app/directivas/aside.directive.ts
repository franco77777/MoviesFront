import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAside]',
})
export class AsideDirective {
  constructor() {}
  @HostBinding('class.newAside') newAside: boolean;

  @HostListener('window:scroll') onScroll() {
    window.scrollY > 250 ? (this.newAside = true) : (this.newAside = false);
  }
}
