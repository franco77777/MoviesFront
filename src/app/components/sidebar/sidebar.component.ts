import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from './../../services/peliculas.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { Observable, map } from 'rxjs';
import { movieDetails } from 'src/app/interfaces';
import { VariablesService } from 'src/app/services/variables.service';
import { Variables2Service } from 'src/app/services/variables2.service';
import { DatabaseService } from 'src/app/services/database.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements AfterViewInit, OnInit {
  public listSearch$: Observable<movieDetails[]>;
  public active: boolean = false;
  public URL: string = 'https://image.tmdb.org/t/p/w500';
  public recargar: number = 0;
  public genres: any[] = [
    {
      id: 28,
      name: 'Acción',
    },
    {
      id: 12,
      name: 'Aventura',
    },
    {
      id: 16,
      name: 'Animación',
    },
    {
      id: 35,
      name: 'Comedia',
    },
    {
      id: 80,
      name: 'Crimen',
    },
    {
      id: 99,
      name: 'Documental',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Familia',
    },
    {
      id: 14,
      name: 'Fantasía',
    },
    {
      id: 36,
      name: 'Historia',
    },
    {
      id: 27,
      name: 'Terror',
    },
    {
      id: 10402,
      name: 'Música',
    },
    {
      id: 9648,
      name: 'Misterio',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Ciencia ficción',
    },
    {
      id: 10770,
      name: 'Película de TV',
    },
    {
      id: 53,
      name: 'Suspense',
    },
    {
      id: 10752,
      name: 'Bélica',
    },
    {
      id: 37,
      name: 'Western',
    },
  ];
  public seriesNone: boolean = true;
  public peliculasNone: boolean = true;
  public generosNone: boolean = true;
  public opciones: boolean = true;
  public user$ = this.serviceApi.userApi$;
  public registerActive: boolean = false;
  loginActive: boolean = false;
  @ViewChild('toggle') toggle: ElementRef;
  @ViewChild('sidebar') sidebar: ElementRef;
  @ViewChild('cover') cover: ElementRef;
  @ViewChild('listita2') listita2: ElementRef;
  @ViewChild('sidebarclose') sidebarclose: ElementRef;
  @ViewChild('sidebarclose2') sidebarclose2: ElementRef;
  @ViewChild('sidebarclose3') sidebarclose3: ElementRef;
  @ViewChild('sidebarclose4') sidebarclose4: ElementRef;
  @ViewChild('seriesList') seriesList: ElementRef;
  @ViewChild('peliculasList') peliculasList: ElementRef;
  @ViewChild('generosList') generosList: ElementRef;
  @ViewChild('register') register: ElementRef;
  @ViewChild('login') login: ElementRef;
  @ViewChild('opcionesDisplay') opcionesDisplay: ElementRef;
  @ViewChild('optionHidden') optionHidden: ElementRef;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.renderer2.removeClass(this.toggle.nativeElement, 'active');
    this.renderer2.removeClass(this.sidebar.nativeElement, 'sidebaractive');
    this.renderer2.removeClass(this.cover.nativeElement, 'coveractive');
    this.active = false;
  }

  constructor(
    private variable2: Variables2Service,
    private renderer2: Renderer2,
    boton: VariablesService,
    private service: PeliculasService,
    private route: Router,
    private serviceApi: DatabaseService,
    private cookieService: CookieService,
    private variable: VariablesService
  ) {
    boton.boton = this.toggle;
  }
  ngOnInit(): void {
    if (this.cookieService.get('token')) {
      this.serviceApi
        .getUser()
        .subscribe((response) => this.serviceApi.setUserApi(response.email));
    }
    this.user$.subscribe();
  }

  ngAfterViewInit(): void {
    this.renderer2.listen(this.toggle.nativeElement, 'click', (evt) => {
      this.change();
    });
    this.renderer2.listen(this.cover.nativeElement, 'click', (evt) => {
      this.change();
    });
    this.renderer2.listen(this.sidebarclose.nativeElement, 'click', (evt) => {
      this.change();
    });
    this.renderer2.listen(this.sidebarclose2.nativeElement, 'click', (evt) => {
      this.change();
    });
    this.renderer2.listen(this.sidebarclose3.nativeElement, 'click', (evt) => {
      this.change();
    });
    this.renderer2.listen(this.sidebarclose4.nativeElement, 'click', (evt) => {
      this.change();
    });
  }
  submit(value: string) {
    event.preventDefault();
    this.route.navigate(['/search', value]);
  }
  keyupmovies(value: string) {
    this.listSearch$ = this.service
      .getMoviesSearch(value)
      .pipe(map((response) => response.results));
  }
  getURL(post: string) {
    if (!post) return '../../../assets/images/travolta2.png';
    return `${this.URL}${post}`;
  }

  Focus() {
    this.renderer2.addClass(this.listita2.nativeElement, 'listitafocus2');
  }
  OverFocus() {
    setTimeout(() => {
      this.renderer2.removeClass(this.listita2.nativeElement, 'listitafocus2');
    }, 100);
  }
  change(): void {
    const togle = this.toggle.nativeElement;

    if (!this.active) {
      this.active = true;
      this.renderer2.addClass(togle, 'active');
      this.renderer2.addClass(this.sidebar.nativeElement, 'sidebaractive');
      this.renderer2.addClass(this.cover.nativeElement, 'coveractive');
    } else {
      this.active = false;
      this.renderer2.removeClass(togle, 'active');
      this.renderer2.removeClass(this.sidebar.nativeElement, 'sidebaractive');
      this.renderer2.removeClass(this.cover.nativeElement, 'coveractive');
    }

    /* const asTitle = this.title.nativeElement;
    console.log(asTitle);
    const dos: any = document.querySelector('#title');
    dos.style.color = 'red'; */
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  variable2Change(data: string) {
    this.variable2.setMovieGenre = { data: data, scroll: true };
  }

  seriesDisplay() {
    if (this.seriesNone) {
      this.seriesNone = false;
      this.renderer2.addClass(this.seriesList.nativeElement, 'displaySeries');
    } else {
      this.seriesNone = true;
      this.renderer2.removeClass(
        this.seriesList.nativeElement,
        'displaySeries'
      );
    }
  }
  peliculasDisplay() {
    if (this.peliculasNone) {
      this.peliculasNone = false;
      this.renderer2.addClass(
        this.peliculasList.nativeElement,
        'displaySeries'
      );
    } else {
      this.peliculasNone = true;
      this.renderer2.removeClass(
        this.peliculasList.nativeElement,
        'displaySeries'
      );
    }
  }

  generosDisplay() {
    if (this.generosNone) {
      this.generosNone = false;
      this.renderer2.addClass(this.generosList.nativeElement, 'displayGeneros');
    } else {
      this.generosNone = true;
      this.renderer2.removeClass(
        this.generosList.nativeElement,
        'displayGeneros'
      );
    }
  }

  Register() {
    if (this.registerActive) {
      this.registerActive = false;
      this.renderer2.removeClass(
        this.register.nativeElement,
        'registermodalview'
      );
    } else {
      this.registerActive = true;
      this.renderer2.addClass(this.register.nativeElement, 'registermodalview');
    }
  }
  Login() {
    if (this.loginActive) {
      this.loginActive = false;
      this.renderer2.removeClass(this.login.nativeElement, 'registermodalview');
    } else {
      this.loginActive = true;
      this.renderer2.addClass(this.login.nativeElement, 'registermodalview');
    }
  }
  closeSesion() {
    this.cookieService.delete('token');
    this.serviceApi.setUserApi(null);
    //window.location.replace('/home');
  }
  resetPage() {
    this.variable.resetPageObserver();
  }
}
