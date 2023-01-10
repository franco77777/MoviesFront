import {
  Component,
  ElementRef,
  ViewChild,
  Renderer2,
  OnInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  public active: boolean = false;
  @ViewChild('toggle') toggle: ElementRef;
  @ViewChild('asTitle') title: ElementRef;
  @ViewChild('asTitle1') title1: ElementRef;
  @ViewChild('asTitle2') title2: ElementRef;
  @ViewChild('asTitle3') title3: ElementRef;

  constructor(private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer2.listen(this.toggle.nativeElement, 'click', (evt) => {
      this.change();
    });
  }

  change(): void {
    const togle = this.toggle.nativeElement;
    const asTitle1 = this.title1.nativeElement;
    const asTitle2 = this.title2.nativeElement;
    const asTitle3 = this.title3.nativeElement;
    if (!this.active) {
      this.renderer2.addClass(asTitle1, 'activeline1__bars-menu');
      this.renderer2.addClass(asTitle2, 'activeline2__bars-menu');
      this.renderer2.addClass(asTitle3, 'activeline3__bars-menu');
      this.renderer2.addClass(togle, 'active');
      this.active = true;
    } else {
      this.renderer2.removeClass(asTitle1, 'activeline1__bars-menu');
      this.renderer2.removeClass(asTitle2, 'activeline2__bars-menu');
      this.renderer2.removeClass(asTitle3, 'activeline3__bars-menu');
      this.renderer2.removeClass(togle, 'active');
      this.active = false;
    }

    /* const asTitle = this.title.nativeElement;
    console.log(asTitle);
    const dos: any = document.querySelector('#title');
    dos.style.color = 'red'; */
  }
}
