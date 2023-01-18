import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css'],
})
export class PruebasComponent implements AfterViewInit {
  @ViewChild('prueba') prueba: ElementRef;

  constructor(private renderer2: Renderer2) {

  }

  ngAfterViewInit(): void {
    this.renderer2.listen(this.prueba.nativeElement, 'click', (evt) => {
      this.change();
    });

  }
  change(): void {
    const togle = this.prueba.nativeElement;

      this.renderer2.addClass(togle, 'active');

  }
}
