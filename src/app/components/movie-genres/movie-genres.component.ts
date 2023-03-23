import { Variables2Service } from './../../services/variables2.service';
import { MovieGenre, MovieGenres } from './../../interfaces/index';
import { combineLatest, map, Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-movie-genres',
  templateUrl: './movie-genres.component.html',
  styleUrls: ['./movie-genres.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieGenresComponent implements OnInit {
  public genres: string;
  public genreId: number;
  public Movies$: Observable<MovieGenres>;
  private URL: string = 'https://image.tmdb.org/t/p/w500';
  public recargar: number = 0;
  public page: string = '1';
  public totalPages: number;
  constructor(
    private route: ActivatedRoute,
    private service: PeliculasService,
    private movieGenre: Variables2Service,
    private variable: VariablesService
  ) {}
  ngOnInit(): void {
    // this.route.params.subscribe(
    //   (response) => (
    //     (this.genreId = response['id']),
    //     (this.Movies$ = this.service.getMovieGenre(response['id']))
    //   )
    // );
    combineLatest([this.variable.pageObserver, this.route.params]).subscribe(
      ([page, params]) => {
        this.genreId = params['id'];
        this.genres = params['genre'];
        this.page = page;
        this.Movies$ = this.service.getMovieGenre(params['id'], page);
      }
    );
  }
  getURL(post: string) {
    if (!post) return '../../../assets/images/travolta2.png';
    return `${this.URL}${post}`;
  }

  actualizar() {
    this.recargar = this.recargar * -1 + 1;
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
    this.Movies$.pipe(map((res) => (this.totalPages = res.total_pages)));
    if (parseInt(this.page) >= this.totalPages) {
      return true;
    } else {
      return false;
    }
  }
}
