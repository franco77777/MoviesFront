import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VariablesService {
  boton: ElementRef;
  public genre: string = null;
  constructor() {}
  setGenre(genero: string): void {
    this.genre = genero;
  }
}
