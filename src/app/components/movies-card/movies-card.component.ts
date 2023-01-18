import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css'],
})
export class MoviesCardComponent implements AfterViewInit, OnInit {
  public activo: ElementRef = null;
  private URL: string = 'https://image.tmdb.org/t/p/w500';
  public discover: any[] = [
    {
      adult: false,
      backdrop_path: '/r9PkFnRUIthgBp2JZZzD380MWZy.jpg',
      genre_ids: [16, 28, 12, 35, 10751, 14],
      id: 315162,
      original_language: 'en',
      original_title: 'Puss in Boots: The Last Wish',
      overview:
        "Secuela de 'El gato con botas' (2011). El Gato con Botas descubre que su pasión por la aventura le ha pasado factura: ha consumido ocho de sus nueve vidas, por ello emprende un viaje épico para encontrar el mítico Último Deseo y restaurar sus nueve vidas...",
      popularity: 12066.07,
      poster_path: '/b5Jb7GoQaqIXy4VEdnQa0UrQZI.jpg',
      release_date: '2022-12-07',
      title: 'El Gato con Botas: El último deseo',
      video: false,
      vote_average: 8.6,
      vote_count: 1677,
    },
    {
      adult: false,
      backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
      genre_ids: [878, 12, 28],
      id: 76600,
      original_language: 'en',
      original_title: 'Avatar: The Way of Water',
      overview:
        "Ambientada más de una década después de los acontecimientos de la primera película, 'Avatar: The Way of Water' empieza contando la historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que los persiguen, lo que tienen que hacer para mantenerse a salvo, las batallas que libran para seguir con vida y las tragedias que sufren.",
      popularity: 3948.296,
      poster_path: '/kUAG4ZQcsNbRyiPyAr3hLdsVgAq.jpg',
      release_date: '2022-12-14',
      title: 'Avatar: El sentido del agua',
      video: false,
      vote_average: 7.7,
      vote_count: 4219,
    },
    {
      adult: false,
      backdrop_path: '/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg',
      genre_ids: [28, 35, 80, 53],
      id: 899112,
      original_language: 'en',
      original_title: 'Violent Night',
      overview:
        'Cuando un equipo de mercenarios irrumpe en Nochebuena dentro de un complejo familiar adinerado y toma como rehenes a todos los que están dentro, no estaban preparados para un defensor sorpresa: Santa Claus (David Harbour) está en el edificio y a punto de demostrar por qué este Santa Claus, no es ningún santo.',
      popularity: 2625.132,
      poster_path: '/hqBeKurpfqoV5msTH5XttGLwFUv.jpg',
      release_date: '2022-11-30',
      title: 'Noche de paz',
      video: false,
      vote_average: 7.7,
      vote_count: 914,
    },
    {
      adult: false,
      backdrop_path: '/q2fY4kMXKoGv4CQf310MCxpXlRI.jpg',
      genre_ids: [878, 27, 35],
      id: 536554,
      original_language: 'en',
      original_title: 'M3GAN',
      overview:
        'Un ingeniero en robótica de una empresa de juguetes construye una muñeca realista que comienza a cobrar vida propia.',
      popularity: 2607.511,
      poster_path: '/nODj4huoOcHwCQnfhZFCqUYcInU.jpg',
      release_date: '2023-01-06',
      title: 'M3GAN',
      video: false,
      vote_average: 7.1,
      vote_count: 248,
    },
    {
      adult: false,
      backdrop_path: '/53BC9F2tpZnsGno2cLhzvGprDYS.jpg',
      genre_ids: [14, 28, 12, 53],
      id: 736526,
      original_language: 'no',
      original_title: 'Troll',
      overview:
        'En lo profundo de la montaña Dovre, algo gigantesco se despierta después de mil años de cautiverio. La criatura destruye todo a su paso y se acerca rápidamente a Oslo.',
      popularity: 2300.001,
      poster_path: '/ntwVUjOOA2kpTkgng4OotBMhyUP.jpg',
      release_date: '2022-12-01',
      title: 'Trol',
      video: false,
      vote_average: 6.7,
      vote_count: 1007,
    },
    {
      adult: false,
      backdrop_path: '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
      genre_ids: [14, 28, 878],
      id: 436270,
      original_language: 'en',
      original_title: 'Black Adam',
      overview:
        'Casi 5.000 años después de haber sido dotado de los poderes omnipotentes de los antiguos dioses y encarcelado con la misma rapidez, Black Adam es liberado de su tumba terrenal, listo para desatar su forma única de justicia en el mundo moderno.',
      popularity: 2250.041,
      poster_path: '/mPTzXksC8HcAj6EM6WjZFJVJEzF.jpg',
      release_date: '2022-10-21',
      title: 'Black Adam',
      video: false,
      vote_average: 7.2,
      vote_count: 3689,
    },
    {
      adult: false,
      backdrop_path: '/tsjXBo4LmzV0Bb9hdrz25tzX5GD.jpg',
      genre_ids: [10402],
      id: 1041513,
      original_language: 'en',
      original_title: 'Encanto at the Hollywood Bowl',
      overview:
        'Adéntrate en Casa Madrigal para disfrutar un concierto espectacular sin precedentes, ya que el reparto original de “Encanto”, película de Disney Animation Studios y ganadora del Óscar, se reúne en el Hollywood Bowl. Protagonizado por Stephanie Beatriz, Adassa, Carolina Gaitán, Jessica Darrow, Diane Guerrero, Mauro Castillo, Angie Cepeda y Olga Merediz, junto con invitados especiales, como la superestrella colombiana Carlos Vives, “Encanto en el Hollywood Bowl” transforma el histórico edificio en una recreación del mundo de la película que se convirtió en un fenómeno mundial. Este concierto te dará un asiento en primera fila para un extravagante musical que conmemora el mundo, los personajes y las canciones de “Encanto”, de Disney Animation.',
      popularity: 2129.357,
      poster_path: '/3F0PQK3PBOxI45Dwvdnzgfv5aca.jpg',
      release_date: '2022-12-28',
      title: 'Encanto en el Hollywood Bowl',
      video: false,
      vote_average: 6.7,
      vote_count: 15,
    },
    {
      adult: false,
      backdrop_path: '/o0s4XsEDfDlvit5pDRKjzXR4pp2.jpg',
      genre_ids: [28, 12, 14, 878],
      id: 19995,
      original_language: 'en',
      original_title: 'Avatar',
      overview:
        'Año 2154. Jake Sully , un exmarine en silla de ruedas, es enviado al planeta Pandora, donde se ha creado el programa Avatar, gracias al cual los seres humanos pueden controlar de forma remota un cuerpo biológico con apariencia y genética de la especie nativa. Pronto se encontrará con la encrucijada entre seguir las órdenes de sus superiores o defender al mundo que le ha acogido y siente como suyo.',
      popularity: 2041.691,
      poster_path: '/tXmTHdrZgNsULqCbThK2Dt2X9Wt.jpg',
      release_date: '2009-12-15',
      title: 'Avatar',
      video: false,
      vote_average: 7.6,
      vote_count: 27777,
    },
    {
      adult: false,
      backdrop_path: '/sKK5bbQm15jzbMRwCJmPBbv9trN.jpg',
      genre_ids: [12, 10751, 14],
      id: 411,
      original_language: 'en',
      original_title:
        'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
      overview:
        'La historia narra las aventuras de cuatro hermanos: Lucy, Edmund, Susan y Peter, que durante la Segunda Guerra Mundial descubren el mundo de Narnia, al que acceden a través de un armario mágico mientras juegan al escondite en la casa de campo de un viejo profesor. En Narnia descubrirán un mundo increíble habitado por animales que hablan, duendes, faunos, centauros y gigantes al que la Bruja Blanca- Jadis- ha condenado al invierno eterno. Con la ayuda del león Aslan, el noble soberano, los niños lucharán para vencer el poder que la Bruja Blanca ejerce sobre Narnia en una espectacular batalla y conseguir así liberarle de la maldición del frío.',
      popularity: 1914.555,
      poster_path: '/vnyDtI6aMZ2TtAjrmNsKBIeoea9.jpg',
      release_date: '2005-12-07',
      title: 'Las crónicas de Narnia: El león, la bruja y el armario',
      video: false,
      vote_average: 7.1,
      vote_count: 9165,
    },
    {
      adult: false,
      backdrop_path: '/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg',
      genre_ids: [35, 80, 9648],
      id: 661374,
      original_language: 'en',
      original_title: 'Glass Onion: A Knives Out Mystery',
      overview:
        'Cuando el multimillonario Miles Bron (Edward Norton) invita a algunos de sus allegados a una escapada a su isla griega privada, pronto queda claro que no todo es perfecto en el paraíso. Y cuando alguien aparece muerto, ¿quién mejor que Benoit Blanc para desentrañar todas las capas del misterio? Secuela de "Puñales por la espalda".',
      popularity: 1906.416,
      poster_path: '/uJ3YC0IRVT3ZdUqsraVkbmDqDC5.jpg',
      release_date: '2022-11-23',
      title: 'Puñales por la espalda: El misterio de Glass Onion',
      video: false,
      vote_average: 7.1,
      vote_count: 2679,
    },
    {
      adult: false,
      backdrop_path: '/gkseI3CUfQtMKX41XD4AxDzhQb7.jpg',
      genre_ids: [28, 18, 36],
      id: 724495,
      original_language: 'en',
      original_title: 'The Woman King',
      overview:
        'Una epopeya histórica inspirada en los hechos reales que sucedieron en el Reino de Dahomey, uno de los estados más poderosos de África en los siglos XVIII y XIX. La historia sigue a Nanisca (Davis), general de la unidad militar exclusivamente femenina y a Nawi (Mbedu), una recluta ambiciosa. Juntas lucharon contra enemigos que violaron su honor, esclavizaron a su gente y amenazaron con destruir todo por lo que habían vivido.',
      popularity: 1768.767,
      poster_path: '/jny1jvCkgpzc3C0axQsX9ADYcAl.jpg',
      release_date: '2022-09-16',
      title: 'La mujer rey',
      video: false,
      vote_average: 7.9,
      vote_count: 1044,
    },
    {
      adult: false,
      backdrop_path: '/7dm64SW5L5CCg47kAEAcdCGaq5i.jpg',
      genre_ids: [27, 53],
      id: 676547,
      original_language: 'en',
      original_title: 'Prey for the Devil',
      overview:
        'Una joven monja, la hermana Ann (Jacqueline Byers), se prepara para un exorcismo y se enfrenta a una fuerza demoniaca que está misteriosamente relacionada con su pasado.',
      popularity: 1623.652,
      poster_path: '/9l3thlGr0eLR3MstMez3Cc2EmGO.jpg',
      release_date: '2022-10-23',
      title: 'Reza por el diablo',
      video: false,
      vote_average: 7.2,
      vote_count: 378,
    },
    {
      adult: false,
      backdrop_path: '/nWs0auTqn2UaFGfTKtUE5tlTeBu.jpg',
      genre_ids: [10751, 35, 14],
      id: 668482,
      original_language: 'en',
      original_title: "Roald Dahl's Matilda the Musical",
      overview:
        'Una joven extraordinaria descubre su superpoder y reúne el coraje extraordinario, contra viento y marea, para ayudar a otros a cambiar sus historias, al mismo tiempo que se hace cargo de su propio destino. Al defender lo que es correcto, se encuentra con resultados milagrosos.',
      popularity: 1538.183,
      poster_path: '/7iUkSvlCnYdyl9tSKexwHK9Mo8p.jpg',
      release_date: '2022-11-25',
      title: 'Matilda, de Roald Dahl: El musical',
      video: false,
      vote_average: 6.8,
      vote_count: 335,
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
      popularity: 1528.32,
      poster_path: '/mYpT2R7639KvKZ668uoQGS2QNFp.jpg',
      release_date: '2022-11-11',
      title: 'Black Panther: Wakanda Forever',
      video: false,
      vote_average: 7.5,
      vote_count: 1622,
    },
    {
      adult: false,
      backdrop_path: '/rodjjIJ8oh9nuBp86PhojcYHTEN.jpg',
      genre_ids: [28, 53, 80, 18],
      id: 740952,
      original_language: 'en',
      original_title: 'Savage Salvation',
      overview:
        'Un adicto a los opioides en rehabilitación busca vengarse de los traficantes que provocaron la muerte de su prometida. Dos policías le siguen el rastro.',
      popularity: 1516.076,
      poster_path: '/xnCuJyDxnoTxlQ48yoOXBgVBtnC.jpg',
      release_date: '2022-12-02',
      title: 'El Río de la Ira',
      video: false,
      vote_average: 5.4,
      vote_count: 33,
    },
    {
      adult: false,
      backdrop_path: '/xOcwcyLM2lqXCrZG8AIHC8DXElF.jpg',
      genre_ids: [27],
      id: 943221,
      original_language: 'es',
      original_title: 'Mal de ojo',
      overview:
        'La misteriosa enfermedad de su hermana pequeña hará que Nala y su familia viajen a la casa de su abuela para encontrar la cura. En este lugar, ella aprenderá sobre leyendas locales de brujas que se alimentan de la sangre de los niños para permanecer por siempre jóvenes. Mientras más conoce Nala sobre estos seres diabólicos, más se convencerá de que su abuela podría ser una bruja.',
      popularity: 1455.679,
      poster_path: '/tshEIrdYNHQYubiiRz8mRZR6KQA.jpg',
      release_date: '2022-09-22',
      title: 'Mal de ojo',
      video: false,
      vote_average: 6.8,
      vote_count: 106,
    },
    {
      adult: false,
      backdrop_path: '/edOt2jNyCbb8SQSvulD2sRRJhmA.jpg',
      genre_ids: [28, 80, 53],
      id: 873126,
      original_language: 'it',
      original_title: 'Il mio nome è vendetta',
      overview:
        'Cuando unos viejos enemigos matan a su familia, un antiguo sicario de la mafia huye a Milán con su intrépida hija para esconderse mientras planean su venganza.',
      popularity: 1315.325,
      poster_path: '/zA0dVz2L2s9jIyQxXnL76OwF9DC.jpg',
      release_date: '2022-11-30',
      title: 'Me llamo Venganza',
      video: false,
      vote_average: 6.7,
      vote_count: 301,
    },
    {
      adult: false,
      backdrop_path: '/ecaB1LUoQE1ylZJVF5KLRTkewt8.jpg',
      genre_ids: [28, 35, 80],
      id: 683328,
      original_language: 'id',
      original_title: 'The Big 4',
      overview:
        'Una detective que sigue las reglas se une a cuatro asesinos desafortunados para investigar el asesinato de su padre.',
      popularity: 1305.673,
      poster_path: '/d1Uo0ucvjV4z8Y0eRnFFBkoW5ZC.jpg',
      release_date: '2022-12-19',
      title: 'Los 4 Grandes',
      video: false,
      vote_average: 6.9,
      vote_count: 78,
    },
    {
      adult: false,
      backdrop_path: '/b08BDQPq42AoLMfhi7DtTOoYqVu.jpg',
      genre_ids: [9648, 80, 27],
      id: 800815,
      original_language: 'en',
      original_title: 'The Pale Blue Eye',
      overview:
        'Historia ambientada en 1830 sobre un veterano detective, Augustus Landor, que intenta resolver unos asesinatos cometidos en West Point con la ayuda de un joven cadete al que el mundo conocería luego como Edgar Allan Poe.',
      popularity: 1250.249,
      poster_path: '/1ZSUfTTCYekqd7d9KN3mxFPlLBf.jpg',
      release_date: '2022-12-23',
      title: 'Los crímenes de la academia',
      video: false,
      vote_average: 7.1,
      vote_count: 608,
    },
    {
      adult: false,
      backdrop_path: '/mYQSbZdGX0JJb49NLO04UA0iFEU.jpg',
      genre_ids: [28, 35, 80],
      id: 1015963,
      original_language: 'en',
      original_title: 'High Heat',
      overview: '',
      popularity: 1244.219,
      poster_path: '/mmD0NVdhiRiCu64YKem5GK5PSfy.jpg',
      release_date: '2022-12-16',
      title: 'High Heat',
      video: false,
      vote_average: 4.9,
      vote_count: 21,
    },
  ];
  getURL(post: string) {
    return `${this.URL}${post}`;
  }

  @ViewChild('boton') boton: ElementRef;
  @ViewChild('boton2') boton2: ElementRef;
  @ViewChild('boton3') boton3: ElementRef;
  @ViewChild('boton4') boton4: ElementRef;
  @ViewChild('boton5') boton5: ElementRef;

  constructor(
    private renderer2: Renderer2,
    private service: PeliculasService
  ) {}

  ngAfterViewInit(): void {
    this.renderer2.listen(this.boton.nativeElement, 'click', (evt) => {
      this.change(this.boton);
    });
    this.renderer2.listen(this.boton2.nativeElement, 'click', (evt) => {
      this.change(this.boton2);
    });
    this.renderer2.listen(this.boton3.nativeElement, 'click', (evt) => {
      this.change(this.boton3);
    });
    this.renderer2.listen(this.boton4.nativeElement, 'click', (evt) => {
      this.change(this.boton4);
    });
    this.renderer2.listen(this.boton5.nativeElement, 'click', (evt) => {
      this.change(this.boton5);
    });
  }
  change(elemento: ElementRef): void {
    this.activo
      ? this.renderer2.removeClass(this.activo.nativeElement, 'active')
      : (this.activo = elemento);
    this.renderer2.addClass(elemento.nativeElement, 'active');
    this.activo = elemento;
  }

  ngOnInit(): void {}

  getDiscover(): void {
    this.service
      .getDiscover()
      .subscribe(
        (response) => (
          (this.discover = response.results), console.log(response)
        )
      );
  }
}
