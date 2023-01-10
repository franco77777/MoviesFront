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
  @ViewChild('sidebar') sidebar: ElementRef;

  constructor(private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer2.listen(this.toggle.nativeElement, 'click', (evt) => {
      this.change();
    });
  }

  change(): void {
    const togle = this.toggle.nativeElement;
    if (!this.active) {
      this.renderer2.addClass(togle, 'active');
      this.renderer2.addClass(this.sidebar.nativeElement, 'sidebar');

      this.active = true;
    } else {
      this.renderer2.removeClass(togle, 'active');
      this.renderer2.removeClass(this.sidebar.nativeElement, 'sidebar');
      this.active = false;
    }

    /* const asTitle = this.title.nativeElement;
    console.log(asTitle);
    const dos: any = document.querySelector('#title');
    dos.style.color = 'red'; */
  }
}
