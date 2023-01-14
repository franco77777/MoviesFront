import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private URL: string = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}
}
