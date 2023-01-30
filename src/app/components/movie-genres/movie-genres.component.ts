import { Variables2Service } from './../../services/variables2.service';
import { MovieGenre, MovieGenres } from './../../interfaces/index';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

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
  constructor(
    private route: ActivatedRoute,
    private service: PeliculasService,
    private movieGenre: Variables2Service
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(
      (response) => (this.genres = response['genre'])
    );
    this.route.params.subscribe(
      (response) => (
        (this.genreId = response['id']),
        (this.Movies$ = this.service.getMovieGenre(response['id']))
      )
    );
  }
  getURL(post: string) {
    if (!post) return '../../../assets/images/travolta2.png';
    return `${this.URL}${post}`;
  }

  actualizar() {
    this.recargar = this.recargar * -1 + 1;
    console.log('soy actualizar');
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
