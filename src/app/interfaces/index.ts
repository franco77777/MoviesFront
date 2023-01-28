export interface Movies {
  page: number;
  results: movieDetails[];
  total_pages: number;
  total_results: number;
}

export interface movieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: any;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any;
  production_countries: any;
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: any;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Credits {
  id: number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: Department;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: Department;
  job?: string;
}

export enum Department {
  Acting = 'Acting',
  Art = 'Art',
  Camera = 'Camera',
  CostumeMakeUp = 'Costume & Make-Up',
  Crew = 'Crew',
  Directing = 'Directing',
  Editing = 'Editing',
  Production = 'Production',
  Sound = 'Sound',
  VisualEffects = 'Visual Effects',
  Writing = 'Writing',
}
export interface Videos {
  id: number;
  results: Trailers[];
}

export interface Trailers {
  iso_639_1: any;
  iso_3166_1: any;
  name: string;
  key: string;
  site: any;
  size: number;
  type: any;
  official: boolean;
  published_at: Date;
  id: string;
}

export interface Series {
  page: number;
  results: Serie[];
  total_pages: number;
  total_results: number;
}

export interface Serie {
  backdrop_path: null | string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieGenres {
  page: number;
  results: MovieGenre[];
  total_pages: number;
  total_results: number;
}

export interface MovieGenre {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface datos{
  genero: string;
  id:number
}
