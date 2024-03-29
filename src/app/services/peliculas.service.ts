import { MovieGenres, Movies, Serie } from './../interfaces/index';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Credits, movieDetails, Series, Trailers, Videos } from '../interfaces';
import { modalBackdrop } from 'flowbite';

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
  private MoviesCredits: string =
    '/credits?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES';
  private MoviesTrailers: string =
    '/videos?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES';
  private SeriesDiscover: string =
    '&language=es-ES&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0';
  private key: string = 'b2420eb5b40423ebe58589621b36134c';

  /*  https://api.themoviedb.org/3/tv/popular?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=1 */

  /* https://api.themoviedb.org/3/movie/653851/videos?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES */

  /* https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES */

  /* 'https://api.themoviedb.org/3/movie/436270?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES''; */

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

  getPremieres2(page: Observable<string>): Observable<MovieGenres> {
    return this.http.get<MovieGenres>(
      `${this.URL}${this.MoviesPremier}${page}`
    );
  }

  getPremieres(page: string): Observable<MovieGenres> {
    return this.http.get<MovieGenres>(
      `${this.URL}${this.MoviesPremier}${page}`
    );
  }
  getPopular(page: string): Observable<MovieGenres> {
    return this.http.get<MovieGenres>(`${this.URL}${this.MoviesViews}${page}`);
  }

  getRated(page: string): Observable<any> {
    return this.http.get(`${this.URL}${this.MoviesRated}${page}`);
  }

  getComing(page: string): Observable<any> {
    return this.http.get(`${this.URL}${this.MoviesComing}${page}`);
  }
  getDetails(id: string): Observable<movieDetails> {
    return this.http.get<movieDetails>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES`
    );
  }

  getCredits(id: string): Observable<Credits> {
    return this.http.get<Credits>(
      `${this.URL}/movie/${id}${this.MoviesCredits}`
    );
  }

  getMovieTrailer(id: string): Observable<Videos> {
    let response = this.http.get<Videos>(
      `${this.URL}/movie/${id}${this.MoviesTrailers}`
    );
    return response;
  }

  getDetailsSerie(id: string): Observable<Serie> {
    return this.http.get<Serie>(
      `https://api.themoviedb.org/3/tv/${id}?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES`
    );
  }

  getCreditsSerie(id: string): Observable<Credits> {
    return this.http.get<Credits>(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${this.key}&language=es-ES`
    );
  }

  getMovieGenre(id: number, page: string): Observable<MovieGenres> {
    return this.http.get<MovieGenres>(
      `https://api.themoviedb.org/3/discover/movie?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=${page}&with_genres=${id}`
    );
  }
  getSerieTrailer(id: string): Observable<Videos> {
    return this.http.get<Videos>(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES`
    );
  }

  getSeriesPopular(id: string): Observable<Series> {
    return this.http.get<Series>(
      ` https://api.themoviedb.org/3/tv/popular?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&page=${id}`
    );
  }
  getSeriesRanking(id: string): Observable<Series> {
    return this.http.get<Series>(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.key}&language=es-ES&page=${id}`
    );
  }
  getSeriesLatest(id: string): Observable<Series> {
    return this.http.get<Series>(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${this.key}&language=es-ES&page=${id}`
    );
  }

  getMoviesSearch(input: string): Observable<Movies> {
    return this.http.get<Movies>(
      ` https://api.themoviedb.org/3/search/movie?api_key=b2420eb5b40423ebe58589621b36134c&language=es-ES&query=${input}`
    );
  }
}
