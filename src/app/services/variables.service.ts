import { map, Observable, BehaviorSubject } from 'rxjs';
import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VariablesService {
  pageObserver: BehaviorSubject<string> = new BehaviorSubject<string>('1');
  test: string;
  page: string = '1';
  boton: ElementRef;
  public genre: string = null;
  constructor() {}
  setGenre(genero: string): void {
    this.genre = genero;
  }

  upPageObserver() {
    this.pageObserver.subscribe((res) => (this.test = res));
    this.pageObserver.next((parseInt(this.test) + 1).toString());
  }
  downPageObserver() {
    this.pageObserver.subscribe((res) => (this.test = res));
    this.pageObserver.next((parseInt(this.test) - 1).toString());
  }

  resetPageObserver() {
    this.pageObserver.next('1');
  }
}
