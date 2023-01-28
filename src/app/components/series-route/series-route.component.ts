import { Observable, map } from 'rxjs';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces';

@Component({
  selector: 'app-series-route',
  templateUrl: './series-route.component.html',
  styleUrls: ['./series-route.component.css'],
})
export class SeriesRouteComponent implements OnInit {
  public type$: string;
  public list$: Observable<Serie[]>;
  private URL: string = 'https://image.tmdb.org/t/p/w500';
  constructor(
    private route: ActivatedRoute,
    private service: PeliculasService
  ) {
    this.type$ = this.route.snapshot.params['type'];
  }

  ngOnInit(): void {
    /* this.route.params.pipe(map((response) => (this.type$ = response['type']))); */
    this.route.params.subscribe((response) => (this.type$ = response['type']));
    this.route.params.subscribe((response) => {
      if (response['type'] === 'Recientes') {
        this.list$ = this.service
          .getSeriesLatest('1')
          .pipe(map((response) => response.results));
      }
      if (response['type'] === 'Ranking') {
        this.list$ = this.service
          .getSeriesRanking('1')
          .pipe(map((response) => response.results));
      }
      if (response['type'] === 'Mas Vistas') {
        this.list$ = this.service
          .getSeriesPopular('1')
          .pipe(map((response) => response.results));
      }
    });
  }

  /*  switch (response) {
          case 'Recientes':
            this.list$ = this.service
              .getSeriesLatest('1')
              .pipe(map((response) => response.results));
          case 'Mas Vistas':
            this.list$ = this.service
              .getSeriesView('1')
              .pipe(map((response) => response.results));
          case 'Ranking':
            this.list$ = this.service
              .getSeriesPopular('1')
              .pipe(map((response) => response.results));
        }
 */
  getURL(post: string) {
    if (!post) return '../../../assets/images/travolta2.png';
    return `${this.URL}${post}`;
  }
}
