import { DatabaseService } from 'src/app/services/database.service';
import { CookieService } from 'ngx-cookie-service';
import { PeliculasService } from 'src/app/services/peliculas.service';

import {
  BehaviorSubject,
  combineLatest,
  combineLatestAll,
  combineLatestWith,
  concat,
  filter,
  forkJoin,
  map,
  mergeMap,
  observable,
  Observable,
  of,
  pipe,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { movieDetails, UserDatabase, Serie } from './../../interfaces/index';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { JwtServiceService } from 'src/app/jwt/jwt-service.service';
import { modalBackdrop } from 'flowbite';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyprofileComponent implements OnInit, AfterViewInit, OnDestroy {
  public activo: ElementRef = null;
  public moviesActive: boolean = true;
  public UserDatabase$: Observable<UserDatabase>;
  public MoviesId$: Observable<number[]>; /* = of([
    76600, 436270, 774752, 315162, 536554, 505642, 653851, 846433,
  ]); */
  SeriesId$: Observable<number[]>; /* = of([
    100088, 130542, 197109, 204541, 153870, 204095, 153312, 209326, 211239,
    209807, 213713,
  ]);
 */
  MoviesList$: Observable<movieDetails[]>;
  public subscription: Subscription;

  SeriesList$: Observable<Serie[]>;
  public URL: string = 'https://image.tmdb.org/t/p/w500';
  hideme = [];
  serieHideme = [];
  sendRequest: boolean = false;
  userEmail$ = this.serviceApi.userApi$;
  movieDeleted: boolean = false;
  serieDeleted: boolean = false;

  @ViewChild('botonmovie') botonMovie: ElementRef;
  @ViewChild('botonserie') botonSerie: ElementRef;

  constructor(
    private jwtService: JwtServiceService,
    private service: PeliculasService,
    private renderer2: Renderer2,
    private cookieService: CookieService,
    private serviceApi: DatabaseService
  ) {}
  ngOnInit(): void {
    this.MoviesId$ = this.serviceApi
      .getUser()
      .pipe(map((res) => res.peliculas));

    this.SeriesId$ = this.serviceApi.getUser().pipe(map((res) => res.series));

    this.MoviesId$.subscribe((response) =>
      console.log('soy moviesIds', response)
    );
    console.log('soy moviesIds', this.MoviesId$);

    this.MoviesList$ = this.MoviesId$.pipe(
      switchMap((array) =>
        forkJoin(array.map((res) => this.service.getDetails(res.toString())))
      )
    );

    this.SeriesList$ = this.SeriesId$.pipe(
      switchMap((array) =>
        forkJoin(
          array.map((res) => this.service.getDetailsSerie(res.toString()))
        )
      )
    );
  }

  ngAfterViewInit(): void {
    this.renderer2.listen(this.botonMovie.nativeElement, 'click', (eve) => {
      this.change(this.botonMovie);
    });
    this.renderer2.listen(this.botonSerie.nativeElement, 'click', (eve) => {
      this.change(this.botonSerie);
    });

    this.activo = this.botonMovie;
  }

  getURL(post: string) {
    if (!post) return '../../../assets/images/travolta2.png';
    return `${this.URL}${post}`;
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
  clickMovies() {
    this.moviesActive = true;
  }
  clickSeries() {
    this.moviesActive = false;
  }

  change(elemento: ElementRef): void {
    this.renderer2.removeClass(this.activo.nativeElement, 'active');

    /* this.activo
      ? this.renderer2.removeClass(this.activo.nativeElement, 'active')
      : (this.activo = elemento); */
    this.renderer2.addClass(elemento.nativeElement, 'active');
    this.activo = elemento;
  }
  DeleteMovie(id: Number) {
    /* this.movieDeleted = true;

    this.MoviesId$.pipe(
      map((places) => {
        // Here goes some condition, apply it to your use case, the condition only will return when condition matches
        return places.filter((place) => place !== id);
      }),
      map((response) => (this.MoviesId$ = of(response)))
    ).subscribe((response) => console.log(response));
    this.MoviesId$.subscribe((res) =>
      console.log('soy movie id despus del delete', res)
    ); */

    this.serviceApi
      .RemoveMovie([id])
      .subscribe((res) => console.log('soy movies on destroy', res));
  }

  DeleteSerie(id: Number) {
    /* this.serieDeleted = true;
    this.subscription = this.SeriesId$.pipe(
      map((places) => {
        // Here goes some condition, apply it to your use case, the condition only will return when condition matches
        return places.filter((place) => place !== id);
      }),
      map((response) => (this.SeriesId$ = of(response)))
    ).subscribe((response) => console.log(response));
    this.SeriesId$.subscribe((res) =>
      console.log('soy SeriesId id despus del delete', res)
    ); */
    this.serviceApi.RemoveSerie([id]).subscribe((res) => console.log(res));
  }

  /* movieExist(value: Number) {
    this.MoviesId$.pipe(
      map((response) => response.find((res) => res === value)),
      map((res) => (res ? true : false))
    );
  } */

  ngOnDestroy(): void {}
}
