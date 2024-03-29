import { Observable, Subscriber, Subscription, map } from 'rxjs';
import { PeliculasService } from 'src/app/services/peliculas.service';
import {
  Component,
  AfterViewInit,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Renderer2,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Cast,
  Credits,
  movieDetails,
  Series,
  Trailers,
  Videos,
} from 'src/app/interfaces';
import { DatabaseService } from 'src/app/services/database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-top',
  templateUrl: './movie-top.component.html',
  styleUrls: ['./movie-top.component.css'],
})
export class MovieTopComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('covermovie') covermovie: ElementRef;
  @ViewChild('youtube') youtube: ElementRef;
  @ViewChild('demoYouTubePlayer') demoYouTubePlayer: ElementRef<HTMLDivElement>;

  videoWidth: number | undefined;
  videoHeight: number | undefined;
  trailerActive: boolean = false;
  public hours: string;
  public minutes: number;
  public color: string = 'color:#EDB709';
  public color2: string = 'color:#EDB709';
  public color3: string = 'color:#EDB709';
  public color4: string = 'color:#EDB709';
  public color5: string = 'color:#EDB709';
  public title: string;
  public indice$: Observable<string>;
  public indice: string;
  public type: string;
  public percentage: number;
  public URL: string = 'https://image.tmdb.org/t/p/w500';
  private subscription: Subscription;

  public movieDetails: any;
  public movieCredits$: Observable<Credits>;
  public movieTrailers$: Observable<Videos>;

  public actores: any[];

  public recargar: number = 0;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.trailerActive = false;
    this.renderer2.removeClass(this.youtube.nativeElement, 'videoactive');
    this.renderer2.removeClass(this.covermovie.nativeElement, 'coveractive');
    this.actualizar();
  }

  constructor(
    private route: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef,
    private renderer2: Renderer2,
    private service: PeliculasService,
    private serviceApi: DatabaseService
  ) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.indice = this.route.snapshot.params['id'];
    this.indice$ = this.route.params.pipe(map((response) => response['id']));

    this.subscription = this.indice$.subscribe((response) => {
      if (this.type === 'movie') {
        this.subscription = this.service
          .getDetails(response)
          .subscribe((response) => (this.movieDetails = response));
        this.movieCredits$ = this.service.getCredits(response);
        this.movieTrailers$ = this.service.getMovieTrailer(response);
      } else {
        this.subscription = this.service
          .getDetailsSerie(response)
          .subscribe((response) => (this.movieDetails = response));
        this.movieCredits$ = this.service.getCreditsSerie(response);
        this.movieTrailers$ = this.service.getSerieTrailer(response);
      }
    });

    /////////////////////////////////

    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    /////////////////////////

    ///////////////////////////////////////////
    /* if (this.type === 'movie') {
      this.subscription = this.service
        .getDetails(this.indice$)
        .subscribe(
          (response) => (
            (this.movieDetails = response),
            console.log('soy response', response)
          )
        );
      this.movieCredits$ = this.service.getCredits(this.indice);
      this.movieTrailers$ = this.service.getMovieTrailer(this.indice);
    } else {
      this.subscription = this.service
        .getDetailsSerie(this.indice)
        .subscribe((response) => (this.movieDetails = response));
      this.movieCredits$ = this.service.getCreditsSerie(this.indice);
      this.movieTrailers$ = this.service.getSerieTrailer(this.indice);
    } */

    /////////////////////////////////////
  }

  ngAfterViewInit(): void {
    this.renderer2.listen(this.covermovie.nativeElement, 'click', (evt) => {
      this.change();
    });

    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  actualizar() {
    this.recargar = this.recargar * -1 + 1;
  }
  barra(): number {
    let uno = this.movieDetails.vote_average.toString()[0];
    let dos = this.movieDetails.vote_average.toString()[2];

    this.Stars(parseInt(`${uno}${dos}`));
    return parseInt(`${uno}${dos}`);
  }

  getURL(post: string) {
    return `${this.URL}${post}`;
  }
  change() {
    if (!this.trailerActive) {
      this.trailerActive = true;
      this.renderer2.addClass(this.youtube.nativeElement, 'videoactive');
      this.renderer2.addClass(this.covermovie.nativeElement, 'coveractive');
    } else {
      this.trailerActive = false;
      this.renderer2.removeClass(this.youtube.nativeElement, 'videoactive');
      this.renderer2.removeClass(this.covermovie.nativeElement, 'coveractive');
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
    this.subscription.unsubscribe();
    window.removeEventListener('resize', this.onResize);
  }

  ///////////////////////////////////////////
  Stars(percentage: number) {
    if (percentage < 20) {
      this.color2 = '#8DA0BC';
      this.color3 = '#8DA0BC';
      this.color4 = '#8DA0BC';
      this.color5 = '#8DA0BC';
    }
    if (percentage > 20 && percentage < 40) {
      this.color3 = '#8DA0BC';
      this.color4 = '#8DA0BC';
      this.color5 = '#8DA0BC';
    }
    if (percentage > 40 && percentage < 70) {
      this.color4 = '#8DA0BC';
      this.color5 = '#8DA0BC';
    }
    if (percentage > 70 && percentage < 90) {
      this.color5 = '#8DA0BC';
    }
  }
  getHours(runtime: number): string {
    let hours = (runtime / 60).toString()[0];

    this.minutes = runtime % 60;
    return hours;
  }

  getTrailer(trailers: any): any {
    let español = trailers.results.find(
      (e) =>
        e.name.toLowerCase().includes('tráiler oficial') &&
        !e.name.includes('VOSE')
    );

    let trailer = trailers.results.find((e) =>
      e.name.toLowerCase().includes('tráiler oficial')
    );
    if (español) return español.key;
    if (trailer) return trailer.key;
    return trailers.results[0].key;
  }

  getVotes(number: number): string {
    let uno = number.toString().slice(0, 3);

    return uno;
  }

  getDirectors(cast: Cast[]): string[] {
    let directors = cast.flatMap((e) => (e.job === 'Director' ? e.name : []));

    //console.log('soy directores', directors);
    return directors;
  }

  getGenres(genres: any[]): string[] {
    let result = genres.map((e) => e.name);
    return result;
  }
  getActors(actors: Cast[]): Cast[] {
    let results = actors.filter((e) => e.profile_path !== null);
    return results;
  }

  addToMyList() {
    if (this.type === 'movie') {
      Swal.fire({
        icon: 'success',
        title: `la pelicula se agrego a tu lista`,
        showConfirmButton: false,
        timer: 1000,
        background: '#1E2747',
        color: '#fff',
      });
      return this.serviceApi.AddMovie([parseInt(this.indice)]).subscribe();
    } else {
      Swal.fire({
        icon: 'success',
        title: `la serie se agrego a tu lista`,
        showConfirmButton: false,
        timer: 1000,
        background: '#1E2747',
        color: '#fff',
      });
      return this.serviceApi.AddSerie([parseInt(this.indice)]).subscribe();
    }
  }
}
