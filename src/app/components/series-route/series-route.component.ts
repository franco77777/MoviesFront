import { Observable, map, combineLatest } from 'rxjs';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Serie, Series } from 'src/app/interfaces';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-series-route',
  templateUrl: './series-route.component.html',
  styleUrls: ['./series-route.component.css'],
})
export class SeriesRouteComponent implements OnInit {
  public genre: string;
  public list$: Observable<Series>;
  private URL: string = 'https://image.tmdb.org/t/p/w500';
  public page: string = '1';
  public totalPages: number;

  constructor(
    private route: ActivatedRoute,
    private service: PeliculasService,
    private variable: VariablesService
  ) {}

  ngOnInit(): void {
    /* this.route.params.pipe(map((response) => (this.type$ = response['type']))); */
    // this.route.params.subscribe((response) => (this.type$ = response['type']));
    // this.route.params.subscribe((response) => {
    //   if (response['type'] === 'Recientes') {
    //     this.list$ = this.service
    //       .getSeriesLatest('1')
    //       .pipe(map((response) => response.results));
    //   }
    //   if (response['type'] === 'Ranking') {
    //     this.list$ = this.service
    //       .getSeriesRanking('1')
    //       .pipe(map((response) => response.results));
    //   }
    //   if (response['type'] === 'Mas Vistas') {
    //     this.list$ = this.service
    //       .getSeriesPopular('1')
    //       .pipe(map((response) => response.results));
    //   }
    // });

    combineLatest([this.variable.pageObserver, this.route.params]).subscribe(
      ([page, params]) => {
        this.genre = params['type'];
        this.page = page;
        if (params['type'] === 'Recientes') {
          this.list$ = this.service.getSeriesLatest(page);
        }
        if (params['type'] === 'Ranking') {
          this.list$ = this.service.getSeriesRanking(page);
        }
        if (params['type'] === 'Mas Vistas') {
          this.list$ = this.service.getSeriesPopular(page);
        }
      }
    );
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
