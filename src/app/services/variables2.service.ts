import { MovieNavbar } from './../interfaces/index';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { datos } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class Variables2Service {
  private Movie: BehaviorSubject<MovieNavbar> =
    new BehaviorSubject<MovieNavbar>({
      data: null,
      scroll: false,
    });
  constructor() {}

  get getMovieGenre() {
    return this.Movie.asObservable();
  }

  set setMovieGenre(data: MovieNavbar) {
    this.Movie.next(data);
  }
}
