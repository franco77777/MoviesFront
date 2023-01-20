import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbar]',
})
export class NavbarDirective {
  constructor() {}

  @HostBinding('class.newNav') newNav: boolean;
  @HostListener('window:scroll') onScroll() {
    if (window.scrollY >= 50) {
      this.newNav = true;
    } else {
      this.newNav = false;
    }
  }
}
