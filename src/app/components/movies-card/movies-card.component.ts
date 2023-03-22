import { Variables2Service } from './../../services/variables2.service';
import { MovieNavbar } from './../../interfaces/index';
import { VariablesService } from 'src/app/services/variables.service';
import { Subscription, Observable, map } from 'rxjs';
import {
  AfterViewInit,
  OnDestroy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  HostListener,
} from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css'],
})
export class MoviesCardComponent implements AfterViewInit, OnInit, OnDestroy {
  public activo: ElementRef = null;
  private subscription: Subscription;
  private URL: string = 'https://image.tmdb.org/t/p/w500';
  public list: any[];
  public genero: string = null;
  public MovieNavbar$: Observable<string> = null;
  public scroll$: Observable<boolean>;

  @ViewChild('boton2') boton2: ElementRef;
  @ViewChild('boton3') boton3: ElementRef;
  @ViewChild('boton4') boton4: ElementRef;
  @ViewChild('boton5') boton5: ElementRef;
  /* @HostListener('window:scroll') onWidowScroll(): void {
    console.log('ey');
  }
 */
  constructor(
    private renderer2: Renderer2,
    private service: PeliculasService,
    private genre: VariablesService,
    private variable2: Variables2Service
  ) {}

  ngAfterViewInit(): void {
    console.log('soy movies card');

    this.renderer2.listen(this.boton2.nativeElement, 'click', (evt) => {
      this.change(this.boton2);
    });
    this.renderer2.listen(this.boton3.nativeElement, 'click', (evt) => {
      this.change(this.boton3);
    });
    this.renderer2.listen(this.boton4.nativeElement, 'click', (evt) => {
      this.change(this.boton4);
    });
    this.renderer2.listen(this.boton5.nativeElement, 'click', (evt) => {
      this.change(this.boton5);
    });
  }

  ngOnInit(): void {
    this.MovieNavbar$ = this.variable2.getMovieGenre.pipe(
      map((response) => response.data)
    );

    this.scroll$ = this.variable2.getMovieGenre.pipe(
      map((response) => response.scroll)
    );

    /* this.subscription = this.variable2.getMovieGenre.subscribe((response) => {
      switch (response.data) {
        case 'estrenos':
          return this.change(this.boton2);
        case 'ranking':
          return this.change(this.boton3);
        case 'vistas':
          return this.change(this.boton4);
        case 'proximamente':
          return this.change(this.boton5);
      }
    }); */

    this.genero = this.genre.genre;
    this.subscription = this.service
      .getDiscover()
      .subscribe(
        (response) => ((this.list = response.results), console.log(response))
      );
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  change(elemento: ElementRef): void {
    this.activo
      ? this.renderer2.removeClass(this.activo.nativeElement, 'active')
      : (this.activo = elemento);
    this.renderer2.addClass(elemento.nativeElement, 'active');
    this.activo = elemento;
  }

  getURL(post: string) {
    if (!post) return '../../../assets/images/travolta2.png';
    return `${this.URL}${post}`;
  }
  getDiscover(): void {
    this.service
      .getDiscover()
      .subscribe(
        (response) => ((this.list = response.results), console.log(response))
      );
  }

  getPremieres(page: string): void {
    event.preventDefault();
    this.subscription = this.service
      .getPremieres(page)
      .subscribe(
        (response) => (
          (this.list = response.results), console.log('soy estrenos', response)
        )
      );
  }

  getPopular(page: string): void {
    event.preventDefault();
    this.subscription = this.service
      .getPopular(page)
      .subscribe(
        (response) => (
          (this.list = response.results), console.log('soy vistas', response)
        )
      );
  }
  getRated(page: string): void {
    event.preventDefault();
    this.subscription = this.service
      .getRated(page)
      .subscribe(
        (response) => (
          (this.list = response.results), console.log('soy ranking', response)
        )
      );
  }
  getComing(page: string): void {
    event.preventDefault();
    this.subscription = this.service
      .getComing(page)
      .subscribe(
        (response) => (
          (this.list = response.results),
          console.log('soy proximamente', response)
        )
      );
  }

  barra(value: number): number {
    let uno = value.toString()[0];
    let dos = value.toString()[2];
    if (!dos) {
      dos = '0';
    }
    let result = parseInt(`${uno}${dos}`);

    return result;
  }

  color(value: number): string {
    let uno = value.toString()[0];
    let dos = value.toString()[2];
    if (!dos) {
      dos = '0';
    }
    let result = parseInt(`${uno}${dos}`);
    if (result < 40) {
      return '#FF0000';
    }

    if (result >= 40 && result < 75) {
      return '#f9c109';
    }

    if (result >= 75) {
      return '#1de60b';
    }
    return '';
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
