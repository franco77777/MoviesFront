import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private URL: string = 'https://api.themoviedb.org/3';
  private SeriesRated: string =
    '/tv/top_rated?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1';

  //https://api.themoviedb.org/3/tv/top_rated?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1

  constructor(private http: HttpClient) {}

  getSeries(): Observable<any> {
    return this.http.get(`${this.URL}${this.SeriesRated}`);
  }
}
