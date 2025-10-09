export interface ListGameParams {
  key?: string;
  genres?: string;
  page?: number;
  page_size?: number;
  platforms?: number;
  search?: string;
}

export interface InitialState {
  isLoading: boolean;
  isError: boolean;
  data: ListGames;
  currentState: number;
}

export interface ListGames {
  count: number;
  results: Result[];
}

export interface Result {
  slug: string;
  name: string;
  playtime: number;
  platforms: Platform[];
  stores: Store[];
  released: Date;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number;
  suggestions_count: number;
  updated: Date;
  id: number;
  score: null;
  clip: null;
  tags: Tag[];
  esrb_rating: EsrbRating;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  short_screenshots: ShortScreenshot[];
  parent_platforms: Platform[];
  genres: Genre[];
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
  name_en: string;
  name_ru: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Platform {
  platform: Genre;
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface Store {
  store: Genre;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: Language;
  games_count: number;
  image_background: string;
}

export enum Language {
  Eng = "eng",
  Rus = "rus",
}
