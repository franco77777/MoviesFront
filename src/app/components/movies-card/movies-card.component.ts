import { VariablesService } from 'src/app/services/variables.service';
import { Subscription } from 'rxjs';
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
    private genre: VariablesService
  ) {}

  ngAfterViewInit(): void {
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
    this.genero = this.genre.genre;
    this.subscription = this.service
      .getDiscover()
      .subscribe(
        (response) => ((this.list = response.results), console.log(response))
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
  /* getDiscover(): void {
    this.service
      .getDiscover()
      .subscribe(
        (response) => ((this.list = response.results), console.log(response))
      );
  }
 */
  getPremieres(page: string): void {
    this.subscription = this.service
      .getPremieres(page)
      .subscribe(
        (response) => (
          (this.list = response.results), console.log('soy estrenos', response)
        )
      );
  }

  getPopular(page: string): void {
    this.subscription = this.service
      .getPopular(page)
      .subscribe(
        (response) => (
          (this.list = response.results), console.log('soy vistas', response)
        )
      );
  }
  getRated(page: string): void {
    this.subscription = this.service
      .getRated(page)
      .subscribe(
        (response) => (
          (this.list = response.results), console.log('soy ranking', response)
        )
      );
  }
  getComing(page: string): void {
    this.subscription = this.service
      .getComing(page)
      .subscribe(
        (response) => (
          (this.list = response.results),
          console.log('soy proximamente', response)
        )
      );
  }
}
