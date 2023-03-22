import { Token, UserDatabase } from './../interfaces/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class JwtServiceService {
  constructor(private http: HttpClient) {}

  Register(data: User): Observable<Token> {
    return this.http.post<Token>(
      'https://moviesbackend-production.up.railway.app/api/v1/auth/register',
      data
    );
  }

  Login(data: User): Observable<Token> {
    return this.http.post<Token>(
      `https://moviesbackend-production.up.railway.app/api/v1/auth/authenticate`,
      data
    );
  }

  /* prueba(): Observable<UserDatabase> {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjc1ODAxNjQ4LCJleHAiOjE2NzU4MDMwODh9.6Rm6JGPyS__yMrz6y9d4pDjuaz6g6gO2hfEl5hX3-H8',
      Acces: 'd',
    });
    return this.http.get<UserDatabase>(`http://localhost:8080/apidemo`);
  } */
}
