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
  private MoviesDiscover: string =
    '/discover/movie?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate';
  private MoviesPremier: string =
    '/movie/now_playing?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=';
  private MoviesViews: string =
    '/movie/popular?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=';
  private MoviesRated: string =
    '/movie/top_rated?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=';
  private MoviesComing: string =
    '/movie/upcoming?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1';

  //https://api.themoviedb.org/3/movie/upcoming?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1

  //https://api.themoviedb.org/3/movie/top_rated?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1

  //https://api.themoviedb.org/3/movie/popular?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1

  //https://api.themoviedb.org/3/tv/top_rated?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1

  //http://localhost:4200/function%20URL()%20%7B%20[native%20code]%20%7D/movie/now_playing?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1

  constructor(private http: HttpClient) {}

  getSeries(): Observable<any> {
    return this.http.get(`${this.URL}${this.SeriesRated}`);
  }

  getDiscover(): Observable<any> {
    return this.http.get(`${this.URL}${this.MoviesDiscover}`);
  }

  getPremieres(page: string): Observable<any> {
    return this.http.get(`${this.URL}${this.MoviesPremier}${page}`);
  }
  getPopular(page: string): Observable<any> {
    return this.http.get(`${this.URL}${this.MoviesViews}${page}`);
  }

  getRated(page: string): Observable<any> {
    return this.http.get(`${this.URL}${this.MoviesRated}${page}`);
  }

  getComing(page: string): Observable<any> {
    return this.http.get(`${this.URL}${this.MoviesComing}${page}`);
  }
}
