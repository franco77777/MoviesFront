import { PeliculasService } from './../../services/peliculas.service';

import {
  Component,
  ViewEncapsulation,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SlideComponent implements OnInit {
  public URL: string = 'https://image.tmdb.org/t/p/w500';

  public series: any[] = [
    {
      backdrop_path: '/ahS4r0ZYbNC85iTdMtcGojHJVgy.jpg',
      first_air_date: '2023-01-15',
      genre_ids: [18, 10765, 10759],
      id: 100088,
      name: 'The Last of Us',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Last of Us',
      overview:
        'Veinte años después de que una pandemia acabase con casi toda la población mundial, las ciudades han sido abandonadas y la naturaleza ha ocupado su lugar. Los humanos infectados se han convertido en horripilantes monstruos que vagan sin control y los supervivientes se matan por comida y protección. Joel, cuyas circunstancias personales le han convertido en un violento superviviente, es contratado para sacar de una zona militar de cuarentena a Ellie, una chica de 14 años que es la única esperanza para la humanidad. Esta simple tarea se transformará en un brutal viaje a través de Estados Unidos.',
      popularity: 741.831,
      poster_path: '/xSwGgk187WVzdlG2DUrYi7BB8mf.jpg',
      vote_average: 8.9,
      vote_count: 23,
    },
    {
      backdrop_path: '/99vBORZixICa32Pwdwj0lWcr8K.jpg',
      first_air_date: '2021-09-03',
      genre_ids: [10764],
      id: 130392,
      name: "The D'Amelio Show",
      origin_country: ['US'],
      original_language: 'en',
      original_name: "The D'Amelio Show",
      overview:
        'Al pasar de una relativa sombra y una vida aparentemente normal a ser lanzados a los focos de Hollywood casi de la noche a la mañana, los D’Amelio se enfrentan a retos y oportunidades que nunca habrían imaginado. Charli, Dixie, Heidi y Marc hacen todo lo posible por mantenerse unidos mientras intentan adaptarse a la vida en Hollywood.',
      popularity: 21.464,
      poster_path: '/phv2Jc4H8cvRzvTKb9X1uKMboTu.jpg',
      vote_average: 9,
      vote_count: 3164,
    },
    {
      backdrop_path: '/yXSzo0VU1Q1QaB7Xg5Hqe4tXXA3.jpg',
      first_air_date: '2008-01-20',
      genre_ids: [18],
      id: 1396,
      name: 'Breaking Bad',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Breaking Bad',
      overview:
        'Tras cumplir 50 años, Walter White (Bryan Cranston), un profesor de química de un instituto de Albuquerque, Nuevo México, se entera de que tiene un cáncer de pulmón incurable. Casado con Skyler (Anna Gunn) y con un hijo discapacitado (RJ Mitte), la brutal noticia lo impulsa a dar un drástico cambio a su vida: decide, con la ayuda de un antiguo alumno (Aaron Paul), fabricar anfetaminas y ponerlas a la venta. Lo que pretende es liberar a su familia de problemas económicos cuando se produzca el fatal desenlace.',
      popularity: 362.756,
      poster_path: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
      vote_average: 8.9,
      vote_count: 10888,
    },
    {
      backdrop_path: '/q8eejQcg1bAqImEV8jh8RtBD4uH.jpg',
      first_air_date: '2021-11-06',
      genre_ids: [16, 10765, 10759, 18],
      id: 94605,
      name: 'Arcane',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Arcane',
      overview:
        'Con las dispares ciudades de Piltover y Zaun como telón de fondo, dos hermanas luchan en bandos opuestos de una guerra entre tecnologías mágicas y creencias enfrentadas.',
      popularity: 80.904,
      poster_path: '/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg',
      vote_average: 8.7,
      vote_count: 2846,
    },
    {
      backdrop_path: '/uGy4DCmM33I7l86W7iCskNkvmLD.jpg',
      first_air_date: '2013-12-02',
      genre_ids: [16, 35, 10765, 10759],
      id: 60625,
      name: 'Rick y Morty',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Rick and Morty',
      overview:
        'Comedia animada que narra las aventuras de un científico loco Rick Sánchez, que regresa después de 20 años para vivir con su hija, su marido y sus hijos Morty y Summer.',
      popularity: 636.126,
      poster_path: '/5Yiep9EwcQgLolg013ETBVqHxuD.jpg',
      vote_average: 8.7,
      vote_count: 7760,
    },
    {
      backdrop_path: '/790rH1ByeDJg6VPwBFxdzxHRepI.jpg',
      first_air_date: '2019-04-06',
      genre_ids: [16, 35],
      id: 85990,
      name: 'Hitori Bocchi no Marumaru Seikatsu',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'ひとりぼっちの○○生活',
      overview:
        'Hitori Bocchi sufre de extrema ansiedad social, no es buena para hablar con la gente, toma acciones muy extremas, es sorprendentemente experta en evitar a las personas, sus piernas se aprietan cuando se esfuerza demasiado, se llena de sí misma cuando está sola, vomita cuando se la expone a una tensión extrema Y a menudo se le ocurren planes. Ahora ella está ingresando a la escuela secundaria y su única amiga, Yawara Kai, asiste a una escuela diferente. Esto deja a Bocchi solo, rodeado de nuevos compañeros de clase con los que debe hacer amigos antes de que Kai vuelva a hablar con ella.',
      popularity: 20.135,
      poster_path: '/a6OSFlD3xvVVIgbx867egPlOPpZ.jpg',
      vote_average: 8.7,
      vote_count: 127,
    },
    {
      backdrop_path: '/dJ8yrSokdTMnhKJw06MllSfCegb.jpg',
      first_air_date: '2019-01-12',
      genre_ids: [16, 35, 18],
      id: 83121,
      name: 'Kaguya-sama: Love Is War',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'かぐや様は告らせたい～天才たちの恋愛頭脳戦～',
      overview:
        '¡Todo vale en el amor y en la guerra! Dos genios. Dos cerebros. Dos corazones. Una batalla. ¡¿Quién declarará primero su amor?! Kaguya Shinomiya y Miyuki Shirogane son dos prodigios de gran inteligencia y quienes controlan el consejo de estudiantes de su prestigiosa academia, lo que las convierte en la crème de la crème de la élite. Pero claro, estar en la cima es algo que incluye una buena dosis de soledad como extra, y ambos acaban enamorándose el uno del otro. ¿El problema? Que ambos son demasiado orgullosos como para admitir que están enamorados, así que el primero que lo admita, ¡será el perdedor! Comienza su batalla diaria para intentar forzar al otro a declararse primero.',
      popularity: 70.759,
      poster_path: '/xxdu5VfiQLN4ZhA4VMw3tJ1Pi6T.jpg',
      vote_average: 8.7,
      vote_count: 579,
    },
    {
      backdrop_path: '/4Mt7WHox67uJ1yErwTBFcV8KWgG.jpg',
      first_air_date: '1999-10-20',
      genre_ids: [10759, 35, 16],
      id: 37854,
      name: 'One Piece',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'ワンピース',
      overview:
        'Riqueza, fama, poder... un hombre había obtenido todo en este mundo, era el Rey de los Piratas Gold Roger. Antes de morir sus últimas palabras inspiraron al mundo a aventurarse al mar: "¿Mi tesoro? Si lo queréis es vuestro... lo he escondido todo en ese lugar". Y así dio comienzo lo que se conoce como la Gran Era de la Piratería, lanzando a cientos de piratas al mar para encontrar el gran tesoro One Piece. Esta serie relata las aventuras y desventuras de uno de esos piratas, Monkey D. Luffy, quien accidentalmente de pequeño, comió una Fruta del Diablo (Akuma no Mi en japonés), en particular una Gomu Gomu no Mi que hizo que su cuerpo ganara las propiedades físicas de la goma, convirtiéndose en el hombre de goma. Luffy, después de dicho suceso, decide que se convertirá en el próximo Rey de los Piratas y para ello, deberá encontrar el "One Piece".',
      popularity: 115.226,
      poster_path: '/oag7edI9flSMawmNySEiSEJAbrf.jpg',
      vote_average: 8.7,
      vote_count: 3491,
    },
    {
      backdrop_path: '/70YdbMELM4b8x8VXjlubymb2bQ0.jpg',
      first_air_date: '2017-03-19',
      genre_ids: [18, 10751],
      id: 70785,
      name: 'Anne with an E',
      origin_country: ['CA'],
      original_language: 'en',
      original_name: 'Anne with an E',
      overview:
        'Anne Shirley es una niña huérfana que vive en un pequeño pueblo llamado Avonlea que pertenece a la Isla del Príncipe Eduardo, en el año 1890. Después de una infancia difícil, donde fue pasando de orfanato a hogares de acogida, es enviada por error a vivir con una solterona y su hermano. Cuando cumple 13 años, Anne va a conseguir transformar su vida y el pequeño pueblo donde vive gracias a su fuerte personalidad, intelecto e imaginación.',
      popularity: 112.321,
      poster_path: '/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg',
      vote_average: 8.7,
      vote_count: 4175,
    },
    {
      backdrop_path: '/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg',
      first_air_date: '2019-04-06',
      genre_ids: [16, 10765, 10759],
      id: 85937,
      name: 'Kimetsu no Yaiba: Guardianes de la Noche',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '鬼滅の刃',
      overview:
        'El joven Tanjiro Kamado vive feliz con su madre y hermanos pequeños en la montaña, subsistiendo humildemente gracias a la venta de carbón. Una fría mañana, después de regresar de trabajar, se encuentra a toda su familia asesinada con la excepción de su hermana Nezuko, convertida en demonio.',
      popularity: 83.077,
      poster_path: '/tK4GsDa6BREEh6Hfng1tWPuq8oE.jpg',
      vote_average: 8.7,
      vote_count: 4669,
    },
    {
      backdrop_path: '/2vbE9ajftJ7dkqUAyxDS0WFILx8.jpg',
      first_air_date: '2010-09-06',
      genre_ids: [16, 35],
      id: 31132,
      name: 'Historias Corrientes',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Regular Show',
      overview:
        'Mordecai y Rigby son dos amigos inseparables que convierten en fantasía los problemas y tareas cotidianas de sus aburridos trabajos.',
      popularity: 164.602,
      poster_path: '/mS5SLxMYcKfUxA0utBSR5MOAWWr.jpg',
      vote_average: 8.7,
      vote_count: 1643,
    },
    {
      backdrop_path: '/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg',
      first_air_date: '2021-03-25',
      genre_ids: [16, 10765, 10759, 18],
      id: 95557,
      name: 'Invencible',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Invincible',
      overview:
        'Mark Grayson es un adolescente normal, excepto por el hecho de que su padre es el superhéroe más poderoso del planeta. Poco después de su decimoséptimo cumpleaños, Mark comienza a desarrollar sus propios poderes y entra en la tutela de su padre.',
      popularity: 67.919,
      poster_path: '/mWhZ6RSyb4y0extxHl8YGoB0r3t.jpg',
      vote_average: 8.7,
      vote_count: 3352,
    },
    {
      backdrop_path: '/smSbK5cd8T9XHcxEUcems23BDEF.jpg',
      first_air_date: '2016-12-02',
      genre_ids: [18, 10765, 35],
      id: 67915,
      name: 'GOBLIN: El solitario ser inmortal',
      origin_country: ['KR'],
      original_language: 'ko',
      original_name: '쓸쓸하고 찬란하神-도깨비',
      overview:
        'Un ser inmortal desea terminar su existencia buscando en todo el mundo su novia que es la destinada a sacar la espada que le atraviesa el pecho y solo ella es capaz de verla, pero luego de conocerse se enamoran y  es cuando todo cambia para el ser inmortal ya que debido al amor que siente encuentra una nueva razón para mantenerse vivo pero con esto pone en peligro a su amada que además es capaz de ver fantasmas, paralelamente existe un ángel de la muerte que se enamora perdidamente de la que resulta ser la reencarnación de la hermana del ser inmortal. Durante el desarrollo de esta serie se pueden disfrutar de momentos que evocan emisiones inimaginable y definitivamente no tiene ni un solo instante desperdiciado.',
      popularity: 116.232,
      poster_path: '/qZMEiTsNlCQV27hHQE27ZtlPWyv.jpg',
      vote_average: 8.7,
      vote_count: 2429,
    },
    {
      backdrop_path: '/2UG177tWHy7xRmMKWJHB7nAUmKd.jpg',
      first_air_date: '2009-04-05',
      genre_ids: [10759, 16, 10765],
      id: 31911,
      name: 'Fullmetal Alchemist: Brotherhood',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '鋼の錬金術師 FULLMETAL ALCHEMIST',
      overview:
        'Remake de Fullmetal Alchemist. Edward y Alphonse rompieron la regla basica de la alquimia, la cual les trajo graves consecuencias. Para remediar esto, se embarcan en busca de alguna forma de solucionar sus males',
      popularity: 75.912,
      poster_path: '/726CoIcNtWJJuxSyuRLjZkJwGrT.jpg',
      vote_average: 8.7,
      vote_count: 1540,
    },
    {
      backdrop_path: '/3ILMlmC30QUnYkY3XEBOyJ82Dqu.jpg',
      first_air_date: '2016-04-03',
      genre_ids: [10759, 16],
      id: 65930,
      name: 'My Hero Academia',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '僕のヒーローアカデミア',
      overview:
        'Las personas no nacen igual. El protagonista de esta historia es uno de esos casos raros que nacen sin superpoderes, pero esto no le impedirá perseguir su sueño: ser un gran héroe como el legendario All-Might. Para convertirse en el héroe que quiere ser, se apuntará a una de las academias de héroes más prestigiosas del país: Yueiko. Con la ayuda de su ídolo, All-Might, ¿podrá convertirse en un verdadero héroe?',
      popularity: 88.497,
      poster_path: '/dmUuNVWAJumRkDNuauFaLSvga00.jpg',
      vote_average: 8.7,
      vote_count: 4107,
    },
    {
      backdrop_path: '/5DUMPBSnHOZsbBv81GFXZXvDpo6.jpg',
      first_air_date: '2022-10-12',
      genre_ids: [16, 10759, 10765, 35],
      id: 114410,
      name: 'Chainsaw Man',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'チェンソーマン',
      overview:
        'Denji es un adolescente que vive con un demonio motosierra llamado Pochita. Para pagar la deuda que le dejó su padre tras su muerte, ha tenido que ganarse el pan como puede matando demonios y vendiendo sus cadáverse a la mafia, aunque su vida siempre ha sido miserable.\n\nCuando una traición provoca la muerte de Denji, Pochita hace un contrato con él y Denji revive como "Chainsaw Man", un ser humano con el corazón de un demonio.',
      popularity: 904.022,
      poster_path: '/oeNps5WE8umMVcNISI8M2NHk7jg.jpg',
      vote_average: 8.7,
      vote_count: 690,
    },
    {
      backdrop_path: '/fCz519JJeXEtMfR4CmM9tR7rZOB.jpg',
      first_air_date: '2022-04-14',
      genre_ids: [10764],
      id: 154521,
      name: 'Las Kardashian',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Kardashians',
      overview:
        'La familia a la que tanto conoces y adoras vuelve con una nueva serie dando acceso pleno a toda su vida. Kris, Kourtney, Kim, Khloé, Kendall y Kylie se exponen ante las cámaras para revelar los secretos que hay tras los titulares.',
      popularity: 95.141,
      poster_path: '/ftbs56alkPVhyqIn68jaUrRyNTU.jpg',
      vote_average: 8.7,
      vote_count: 1831,
    },
    {
      backdrop_path: '/yreuPT1RYFvWkQ3gjnjRP8vAq3o.jpg',
      first_air_date: '2022-04-09',
      genre_ids: [16, 35, 10759],
      id: 120089,
      name: 'SPY×FAMILY',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'SPY×FAMILY',
      overview:
        'Todo el mundo tiene una parte de sí mismos que no puede mostrar a los demás. En una era en la que las naciones de todo el mundo se encuentran involucradas en una feroz guerra de información a puerta cerrada, Ostania y Westalis llevan décadas en guerra fría. La División de Inteligencia de Westalis (WISE) envía a su mejor espía, "Twilight", en una misión ultrasecreta para vigilar los movimientos de Donovan Desmond, quien dirige el Partido Nacional por la Unidad de Ostania, responsable de bombardear los esfuerzos de paz entre ambos países.',
      popularity: 394.823,
      poster_path: '/wJOLiZIDvtmNbOaaHxQrRGzCAEu.jpg',
      vote_average: 8.7,
      vote_count: 1106,
    },
    {
      backdrop_path: '/iLR6tKvMu67oSK0DIgDutkPBaiy.jpg',
      first_air_date: '2018-07-08',
      genre_ids: [35, 16],
      id: 80539,
      name: 'Asobi Asobase',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'あそびあそばせ',
      overview:
        'Esta comedia gira en torno a tres compañeras de clase que juegan juegos de manos simples. Una de las chicas es buena en los juegos, pero detesta que siempre perdió contra su hermana mayor y por ello se vio obligada a hacer las tareas domésticas mientras crecía. Otra niña es de ascendencia estadounidense, pero criada en Japón, y que solo finge ser mala con el japonés. Otra chica suele observar a las dos primeras jugar y pierde siempre contra ellas.',
      popularity: 12.35,
      poster_path: '/de9UhF8J7HoTMGx1KahTZrcnZ88.jpg',
      vote_average: 8.7,
      vote_count: 113,
    },
    {
      backdrop_path: '/tKh3pc5MEjCIGV7hSJX76qi8aGA.jpg',
      first_air_date: '2018-01-13',
      genre_ids: [16],
      id: 76121,
      name: 'Darling in the FranXX',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'ダーリン・イン・ザ・フランキス',
      overview:
        'En un futuro lejano, cuando la Tierra está en ruinas y la humanidad ha establecido una ciudad-fortaleza móvil bautizada como “Plantación”, unos pilotos viven en Mistilteinn, la “Jaula de pájaros”. Los niños viven allí sin conocer el mundo exterior ni la libertad. Su vida consiste en luchar y superar misiones contra unas formas de vida gigantes y misteriosas conocidas como Kyouryuu. Para enfrentarse a ellos, utilizan los robots Franxx. Un chico llamado Hiro está bautizado como Code:016 y, una vez, fue considerado un prodigio. No obstante, se ha quedado atrás y su existencia parece innecesaria. No pilotar un Franxx es igual a no existir. Un día, una chica misteriosa conocida como “Zero Two” aparece ante él y dos cuernos surgen de su cabeza.',
      popularity: 48.982,
      poster_path: '/wwk3zyeXdyCx68oJ7ncjDkLNkU9.jpg',
      vote_average: 8.7,
      vote_count: 1653,
    },
  ];
  constructor(private service: PeliculasService) {}

  ngOnInit(): void {}
  getSeries() {
    this.service
      .getSeries()
      .subscribe(
        (data) => (
          (this.series = data.results), console.log('soy series2', this.series)
        )
      );
  }

  getURL(post: string) {
    return `${this.URL}${post}`;
  }
}
