import { PeliculasService } from 'src/app/services/peliculas.service';
import { Observable, map } from 'rxjs';
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
import { movieDetails } from 'src/app/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, AfterViewInit {
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
  constructor(
    private variable2: Variables2Service,
    private route: Router,
    private service: PeliculasService
  ) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('soy navbar');
  }
  variable2Change(data: string) {
    this.variable2.setMovieGenre = { data: data, scroll: true };
    console.log('soy data variable2 navbar', this.variable2.getMovieGenre);
  }

  submit(value: string) {
    this.route.navigate(['/search', value]);
    console.log('soy submit ', value);
  }

  keyupmovies(value: string) {
    this.listSearch$ = this.service
      .getMoviesSearch(value)
      .pipe(map((response) => response.results));
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  getURL(post: string) {
    return `${this.URL}${post}`;
  }
}
