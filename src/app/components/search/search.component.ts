import { PeliculasService } from './../../services/peliculas.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { movieDetails } from 'src/app/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public search$: Observable<string>;
  public search: string;
  public list$: Observable<movieDetails[]>;
  private URL: string = 'https://image.tmdb.org/t/p/w500';
  constructor(
    private activeRoute: ActivatedRoute,
    private service: PeliculasService
  ) {
    this.search = activeRoute.snapshot.params['input'];
  }
  ngOnInit(): void {
    this.getMovieSeach(this.search);
    /* this.activeRoute.params.pipe(
      map((response) => (this.search$ = response['input']))
    );
    this.search$.pipe(map((response) => console.log('soy el param', response))); */
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
}
