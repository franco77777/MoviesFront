import { PeliculasService } from './../../services/peliculas.service';
import { Observable, map, Subscription } from 'rxjs';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { movieDetails } from 'src/app/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy, AfterViewInit {
  public search$: Observable<string>;
  public search: string;
  public list$: Observable<movieDetails[]>;
  private URL: string = 'https://image.tmdb.org/t/p/w500';
  public subscribe: Subscription;
  public recargar: number = 0;
  constructor(
    private activeRoute: ActivatedRoute,
    private service: PeliculasService
  ) {
    this.search$ = activeRoute.snapshot.params['input'];
  }
  ngOnInit(): void {
    this.search$ = this.activeRoute.params.pipe(
      map((response) => response['input'])
    );

    this.subscribe = this.search$.subscribe(
      (response) =>
        (this.list$ = this.service
          .getMoviesSearch(response)
          .pipe(map((response) => response.results)))
    );

    //this.getMovieSeach(this.search);
    /* this.activeRoute.params.pipe(
      map((response) => (this.search$ = response['input']))
    );
    this.search$.pipe(map((response) => console.log('soy el param', response))); */
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  getMovieSeach(input: string) {
    this.list$ = this.service
      .getMoviesSearch(input)
      .pipe(map((response) => response.results));
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
}
