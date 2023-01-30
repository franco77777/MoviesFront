import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PruebasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('prueba3') prueba1: ElementRef;
  @ViewChild('prueba4') prueba2: ElementRef;
  @ViewChild('youtube') youtube: ElementRef;
  @ViewChild('demoYouTubePlayer') demoYouTubePlayer: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;
  trailerActive: boolean = false;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private renderer2: Renderer2
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  focuss() {
    this.renderer2.addClass(this.prueba2.nativeElement, 'ver');
  }

  focusout() {
    this.renderer2.removeClass(this.prueba2.nativeElement, 'ver');
  }

  change() {
    if (!this.trailerActive) {
      this.renderer2.addClass(this.youtube.nativeElement, 'videoactive');

      this.trailerActive = true;
    } else {
      this.renderer2.removeClass(this.youtube.nativeElement, 'videoactive');

      this.trailerActive = false;
    }
  }

  ngOnDestroy(): void {}
}
