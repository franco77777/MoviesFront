import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MovieGenre, Serie, MovieGenres } from 'src/app/interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-movie-type',
  templateUrl: './movie-type.component.html',
  styleUrls: ['./movie-type.component.css'],
})
export class MovieTypeComponent implements OnInit {
  public type$: string;
  public list$: Observable<MovieGenre[]>;
  private URL: string = 'https://image.tmdb.org/t/p/w500';
  public genres: string;
  constructor(
    private route: ActivatedRoute,
    private service: PeliculasService
  ) {
    this.type$ = this.route.snapshot.params['type'];
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (response) => (this.genres = response['genre'])
    );
    /* this.route.params.pipe(map((response) => (this.type$ = response['type']))); */
    this.route.params.subscribe((response) => (this.type$ = response['type']));
    this.route.params.subscribe((response) => {
      if (response['type'] === 'Estrenos') {
        this.list$ = this.service
          .getPremieres('1')
          .pipe(map((res) => res.results));
      }
      if (response['type'] === 'Ranking') {
        this.list$ = this.service.getRated('1').pipe(map((res) => res.results));
      }
      if (response['type'] === 'Mas Vistas') {
        this.list$ = this.service
          .getPopular('1')
          .pipe(map((res) => res.results));
      }
      if (response['type'] === 'Proximamente') {
        this.list$ = this.service
          .getComing('1')
          .pipe(map((res) => res.results));
      }
    });
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
