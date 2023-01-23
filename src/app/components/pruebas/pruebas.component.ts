import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css'],
})
export class PruebasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('covermovie') covermovie: ElementRef;
  @ViewChild('botontube') botontube: ElementRef;
  @ViewChild('youtube') youtube: ElementRef;
  @ViewChild('demoYouTubePlayer') demoYouTubePlayer: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;
  trailerActive: boolean = false;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private renderer2: Renderer2
  ) {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngAfterViewInit(): void {
    this.renderer2.listen(this.botontube.nativeElement, 'click', (evt) => {
      this.change();
    });
    this.renderer2.listen(this.covermovie.nativeElement, 'click', (evt) => {
      this.change();
    });
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  change() {
    if (!this.trailerActive) {
      this.renderer2.addClass(this.youtube.nativeElement, 'videoactive');
      this.renderer2.addClass(this.covermovie.nativeElement, 'coveractive');
      this.trailerActive = true;
    } else {
      this.renderer2.removeClass(this.youtube.nativeElement, 'videoactive');
      this.renderer2.removeClass(this.covermovie.nativeElement, 'coveractive');
      this.trailerActive = false;
    }
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(
      this.demoYouTubePlayer.nativeElement.clientWidth,
      1200
    );
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  };

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }
}
