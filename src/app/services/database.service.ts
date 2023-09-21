import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserDatabase } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  userApi$ = new BehaviorSubject<string>(null);
  constructor(private http: HttpClient) {}
  setUserApi(data: string): void {
    this.userApi$.next(data);
  }
  AddMovie(id: Number[]): Observable<boolean> {
    return this.http.post<boolean>(
      `https://moviesback.onrender.com/apidemo/addmovies`,
      id
    );
  }

  AddSerie(id: Number[]): Observable<boolean> {
    return this.http.post<boolean>(
      `https://moviesback.onrender.com/apidemo/addseries`,
      id
    );
  }

  RemoveSerie(id: Number[]): Observable<boolean> {
    return this.http.put<boolean>(
      `https://moviesback.onrender.com/apidemo/deleteseries`,
      id
    );
  }
  RemoveMovie(id: Number[]): Observable<boolean> {
    return this.http.put<boolean>(
      `https://moviesback.onrender.com/apidemo/deletemovies`,
      id
    );
  }
  getUser(): Observable<UserDatabase> {
    return this.http.get<UserDatabase>(
      'https://moviesback.onrender.com/apidemo'
    );
  }
}
