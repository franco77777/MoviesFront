import { DatabaseService } from 'src/app/services/database.service';
import { CookieService } from 'ngx-cookie-service';
import { PeliculasService } from 'src/app/services/peliculas.service';
import {
  Observable,
  map,
  tap,
  Subscription,
  fromEvent,
  filter,
  debounceTime,
  distinct,
  switchMap,
  Subject,
  BehaviorSubject,
} from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Variables2Service } from './../../services/variables2.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { movieDetails, Movies, UserDatabase } from 'src/app/interfaces';
import { JwtServiceService } from 'src/app/jwt/jwt-service.service';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('listita') listita: ElementRef;
  @ViewChild('register') register: ElementRef;
  @ViewChild('login') login: ElementRef;
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput: ElementRef;
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
  public listSearch$: Observable<movieDetails[]>;
  public URL: string = 'https://image.tmdb.org/t/p/w500';
  public minutes: number;
  public moviesSubscription: Subscription;
  public registerActive: boolean = false;
  loginActive: boolean = false;
  public userLogged$: Subject<boolean>;
  public user$ = this.serviceApi.userApi$; // Observable<string> = null;
  public userTest$ = this.serviceApi.userApi$;

  constructor(
    private variable2: Variables2Service,
    private route: Router,
    private service: PeliculasService,
    private renderer2: Renderer2,
    private jwtService: JwtServiceService,
    private cookieService: CookieService,
    private serviceApi: DatabaseService,
    private variable: VariablesService
  ) {}
  ngOnInit(): void {
    if (this.cookieService.get('token')) {
      this.serviceApi
        .getUser()
        .subscribe((response) => this.serviceApi.setUserApi(response.email));
    }
    this.user$.subscribe();
  }

  ngAfterViewInit(): void {}
  variable2Change(data: string) {
    this.variable2.setMovieGenre = { data: data, scroll: true };

    this.variable.resetPageObserver();
  }
  resetPage() {
    this.variable.resetPageObserver();
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

  getHours(runtime: number): string {
    let hours = (runtime / 60).toString()[0];

    this.minutes = runtime % 60;
    return hours;
  }

  Focus() {
    this.renderer2.addClass(this.listita.nativeElement, 'listitafocus');
  }
  OverFocus() {
    setTimeout(() => {
      this.renderer2.removeClass(this.listita.nativeElement, 'listitafocus');
    }, 100);
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

  submit2(value: string) {}

  sendRegister() {}

  closeSesion() {
    this.cookieService.delete('token');
    this.serviceApi.setUserApi(null);
    //window.location.replace('/home');
  }
}
