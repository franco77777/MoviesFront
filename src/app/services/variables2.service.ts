import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { datos } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class Variables2Service {
  private Movie: BehaviorSubject<datos> = new BehaviorSubject<datos>({
    genero: null,
    id: null,
  });
  constructor() {}

  get getMovieGenre() {
    return this.Movie.asObservable();
  }

  set setMovieGenre(data: datos) {
    this.Movie.next(data);
  }
}
