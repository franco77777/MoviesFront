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

  //https://api.themoviedb.org/3/genre/movie/list?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES

  //https://api.themoviedb.org/3/discover/tv?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0

  //https://api.themoviedb.org/3/movie/76600/videos?api_key=b2420eb5b40423ebe58589621b36134c&language=en-US

  //https://api.themoviedb.org/3/movie/upcoming?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1

  //https://api.themoviedb.org/3/movie/top_rated?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1

  //https://api.themoviedb.org/3/movie/popular?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1

  //https://api.themoviedb.org/3/tv/top_rated?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1

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
