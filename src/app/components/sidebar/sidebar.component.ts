import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements AfterViewInit {
  public active: boolean = false;
  @ViewChild('toggle') toggle: ElementRef;
  @ViewChild('sidebar') sidebar: ElementRef;
  @ViewChild('cover') cover: ElementRef;

  constructor(private renderer2: Renderer2, boton: VariablesService) {
    boton.boton = this.toggle;
  }

  ngAfterViewInit(): void {
    console.log('soy sidebar');
    this.renderer2.listen(this.toggle.nativeElement, 'click', (evt) => {
      this.change();
    });
    this.renderer2.listen(this.cover.nativeElement, 'click', (evt) => {
      this.change();
    });
  }
  change(): void {
    const togle = this.toggle.nativeElement;

    if (!this.active) {
      this.renderer2.addClass(togle, 'active');
      this.renderer2.addClass(this.sidebar.nativeElement, 'sidebaractive');
      this.renderer2.addClass(this.cover.nativeElement, 'coveractive');

      this.active = true;
    } else {
      this.renderer2.removeClass(togle, 'active');
      this.renderer2.removeClass(this.sidebar.nativeElement, 'sidebaractive');
      this.renderer2.removeClass(this.cover.nativeElement, 'coveractive');
      this.active = false;
    }

    /* const asTitle = this.title.nativeElement;
    console.log(asTitle);
    const dos: any = document.querySelector('#title');
    dos.style.color = 'red'; */
  }
}
