import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, mergeMap, Observable } from 'rxjs';
import { MovieGenre, Serie, MovieGenres } from 'src/app/interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-movie-type',
  templateUrl: './movie-type.component.html',
  styleUrls: ['./movie-type.component.css'],
})
export class MovieTypeComponent implements OnInit {
  public type$: string;
  public list$: Observable<MovieGenres>;
  private URL: string = 'https://image.tmdb.org/t/p/w500';
  public genres: string;
  public page: string = '1';
  public totalPages: number;

  constructor(
    private route: ActivatedRoute,
    private service: PeliculasService,
    private variable: VariablesService
  ) {
    this.type$ = this.route.snapshot.params['type'];
  }

  ngOnInit(): void {
    combineLatest([this.variable.pageObserver, this.route.params]).subscribe(
      ([page, params]) => {
        this.genres = params['genre'];
        this.page = page;
        if (params['type'] === 'Estrenos') {
          this.list$ = this.service.getPremieres(page);
        }
        if (params['type'] === 'Ranking') {
          this.list$ = this.service.getRated(page).pipe(map((res) => res));
        }
        if (params['type'] === 'Mas Vistas') {
          this.list$ = this.service.getPopular(page).pipe(map((res) => res));
        }
        if (params['type'] === 'Proximamente') {
          this.list$ = this.service.getComing(page).pipe(map((res) => res));
        }
      }
    );

    /* this.route.params.pipe(map((response) => (this.type$ = response['type']))); */
    this.route.params.subscribe((response) => (this.type$ = response['type']));
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
  pageUp() {
    this.variable.upPageObserver();
    //this.variable.pageObserver.subscribe((res) => (this.page = res));
  }
  pageDown() {
    this.variable.downPageObserver();
  }
  buttonDown() {
    if (parseInt(this.page) < 2) {
      return true;
    } else {
      return false;
    }
  }
  buttonUp() {
    this.list$.pipe(map((res) => (this.totalPages = res.total_pages)));
    if (parseInt(this.page) >= this.totalPages) {
      return true;
    } else {
      return false;
    }
  }
}
