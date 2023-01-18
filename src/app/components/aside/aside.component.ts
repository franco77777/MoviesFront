import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  private URL: string = 'https://image.tmdb.org/t/p/w500';
  public recomendados: any[] = [
    {
      adult: false,
      backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
      genre_ids: [12, 878, 28],
      id: 299534,
      original_language: 'en',
      original_title: 'Avengers: Endgame',
      overview:
        'Después de los eventos devastadores de \'Vengadores: Infinity War\', el universo está en ruinas debido a las acciones de Thanos. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles sean las consecuencias... Cuarta y última entrega de la saga "Vengadores".',
      popularity: 121.207,
      poster_path: '/br6krBFpaYmCSglLBWRuhui7tPc.jpg',
      release_date: '2019-04-24',
      title: 'Vengadores: Endgame',
      video: false,
      vote_average: 8.3,
      vote_count: 22472,
    },
    {
      adult: false,
      backdrop_path: '/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg',
      genre_ids: [28, 12, 14, 878],
      id: 791373,
      original_language: 'en',
      original_title: "Zack Snyder's Justice League",
      overview:
        'Con la determinación de asegurar que el sacrificio definitivo de Superman no fue en vano, Bruce Wayne une fuerzas con Diana Prince para reclutar a un equipo de metahumanos que protejan el mundo de una amenaza inminente de proporciones catastróficas. La tarea es más difícil de lo que Bruce imaginaba, ya que cada uno de los reclutas deberá enfrentarse a sus propios demonios para trascender aquello que los detenía, para unirse y formar de manera definitiva una liga de héroes sin precedentes. Ahora unidos, Batman, Wonder Woman, Aquaman, Cyborg y Flash deberán salvar al planeta de la amenaza de Steppenwolf, DeSaad y Darkseid, antes de que sea demasiado tarde.',
      popularity: 191.908,
      poster_path: '/wcIJgChypo0s6ILm9Dkr13rV5q0.jpg',
      release_date: '2021-03-18',
      title: 'La Liga de la Justicia de Zack Snyder',
      video: false,
      vote_average: 8.2,
      vote_count: 8514,
    },
    {
      adult: false,
      backdrop_path: '/hO7KbdvGOtDdeg0W4Y5nKEHeDDh.jpg',
      genre_ids: [80, 53, 18],
      id: 475557,
      original_language: 'en',
      original_title: 'Joker',
      overview:
        'Arthur Fleck es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en Joker, el popular personaje de DC Comics y archivillano de Batman, pero que en este film toma un cariz más realista y oscuro.',
      popularity: 77.807,
      poster_path: '/v0eQLbzT6sWelfApuYsEkYpzufl.jpg',
      release_date: '2019-10-01',
      title: 'Joker',
      video: false,
      vote_average: 8.2,
      vote_count: 21982,
    },
    {
      adult: false,
      backdrop_path: '/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg',
      genre_ids: [28, 12, 878],
      id: 505642,
      original_language: 'en',
      original_title: 'Black Panther: Wakanda Forever',
      overview:
        'La reina Ramonda, Shuri, M’Baku, Okoye y las Dora Milaje, luchan para proteger su nación de la injerencia de potencias mundiales a raíz de la muerte del rey T’Challa. Mientras los wakandianos se esfuerzan por adaptarse a su nueva etapa, los héroes deben actuar unidos, con la ayuda del Perro de la Guerra Nakia y Everett Ross, y forzar un nuevo destino para el reino de Wakanda.',
      popularity: 1284.21,
      poster_path: '/mYpT2R7639KvKZ668uoQGS2QNFp.jpg',
      release_date: '2022-11-09',
      title: 'Black Panther: Wakanda Forever',
      video: false,
      vote_average: 7.5,
      vote_count: 1644,
    },
    {
      adult: false,
      backdrop_path: '/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
      genre_ids: [28, 14, 878],
      id: 399566,
      original_language: 'en',
      original_title: 'Godzilla vs. Kong',
      overview:
        'Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por todo tipo de aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch (Kyle Chandler) se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra.',
      popularity: 139.449,
      poster_path: '/yJTk4eqQd9Yo5REpFbTSOMkbSgn.jpg',
      release_date: '2021-03-24',
      title: 'Godzilla vs. Kong',
      video: false,
      vote_average: 7.7,
      vote_count: 8499,
    },
  ];
  getURL(post: string) {
    return `${this.URL}${post}`;
  }
}
