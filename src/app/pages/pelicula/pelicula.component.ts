import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  public hours: string;
  public minutes: number;
  public color: string = 'color:#EDB709';
  public color2: string = 'color:#EDB709';
  public color3: string = 'color:#EDB709';
  public color4: string = 'color:#EDB709';
  public color5: string = 'color:#EDB709';
  public title: string;
  public indice: number;
  public percentage: number;
  private URL: string = 'https://image.tmdb.org/t/p/w500';
  public movieDetails: any = {
    adult: false,
    backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
    belongs_to_collection: {
      id: 87096,
      name: 'Avatar - Colección',
      poster_path: '/1Y8Khr8lyBw6Tatxlmkqs0UUOWw.jpg',
      backdrop_path: '/iaEsDbQPE45hQU2EGiNjXD2KWuF.jpg',
    },
    budget: 460000000,
    genres: [
      {
        id: 878,
        name: 'Ciencia ficción',
      },
      {
        id: 12,
        name: 'Aventura',
      },
      {
        id: 28,
        name: 'Acción',
      },
    ],
    homepage: '',
    id: 76600,
    imdb_id: 'tt1630029',
    original_language: 'en',
    original_title: 'Avatar: The Way of Water',
    overview:
      "Ambientada más de una década después de los acontecimientos de la primera película, 'Avatar: The Way of Water' empieza contando la historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que los persiguen, lo que tienen que hacer para mantenerse a salvo, las batallas que libran para seguir con vida y las tragedias que sufren.",
    popularity: 2619.368,
    poster_path: '/kUAG4ZQcsNbRyiPyAr3hLdsVgAq.jpg',
    production_companies: [
      {
        id: 574,
        logo_path: '/iB6GjNVHs5hOqcEYt2rcjBqIjki.png',
        name: 'Lightstorm Entertainment',
        origin_country: 'US',
      },
      {
        id: 127928,
        logo_path: '/cxMxGzAgMMBhTXkcpYYCxWCOY90.png',
        name: '20th Century Studios',
        origin_country: 'US',
      },
    ],
    production_countries: [
      {
        iso_3166_1: 'US',
        name: 'United States of America',
      },
    ],
    release_date: '2022-12-14',
    revenue: 1953000000,
    runtime: 192,
    spoken_languages: [
      {
        english_name: 'English',
        iso_639_1: 'en',
        name: 'English',
      },
    ],
    status: 'Released',
    tagline: 'Esta familia es nuestra fortaleza.',
    title: 'Avatar: El sentido del agua',
    video: false,
    vote_average: 7.72,
    vote_count: 4388,
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    let uno = this.movieDetails.vote_average.toString()[0];
    let dos = this.movieDetails.vote_average.toString()[2];
    this.percentage = parseInt(`${uno}${dos}`);
    this.title = `${uno}${dos}`;
    console.log(this.indice);
    this.Stars();
    this.Duration();
  }
  Stars() {
    if (this.percentage < 20) {
      this.color2 = '#8DA0BC';
      this.color3 = '#8DA0BC';
      this.color4 = '#8DA0BC';
      this.color5 = '#8DA0BC';
    }
    if (this.percentage > 20 && this.percentage < 40) {
      this.color3 = '#8DA0BC';
      this.color4 = '#8DA0BC';
      this.color5 = '#8DA0BC';
    }
    if (this.percentage > 40 && this.percentage < 70) {
      this.color4 = '#8DA0BC';
      this.color5 = '#8DA0BC';
    }
    if (this.percentage > 70 && this.percentage < 90) {
      this.color5 = '#8DA0BC';
    }
  }
  Duration() {
    this.hours = (this.movieDetails.runtime / 60).toString()[0];
    this.minutes = this.movieDetails.runtime % 60;
  }

  getImage() {
    return `${this.URL}${this.movieDetails.poster_path}`;
  }
}
