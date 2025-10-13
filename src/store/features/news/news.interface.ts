export interface ListNewsParamsInterface {
  api_key: string;
  sort: string;
  filter: string;
  limit: number;
  format: string;
}

export interface InitialStateNews {
  isLoadingNews: boolean;
  isErrorNews: boolean;
  data: ResultNewsInterface[];
}

export interface ResultNewsInterface {
  publish_date: Date;
  update_date: Date;
  review_type: string;
  id: number;
  authors: string;
  title: string;
  image: Image;
  score: string;
  deck: string;
  good: string;
  bad: string;
  body: string;
  lede: string;
  game: Game;
  releases: Release[];
  videos_api_url: string;
  site_detail_url: string;
}

export interface Game {
  id: number;
  name: string;
  api_detail_url: string;
  site_detail_url: string;
}

export interface Image {
  square_tiny: string;
  screen_tiny: string;
  square_small: string;
  original: string;
}

export interface Release {
  upc: number | null;
  distribution_type: string;
  id: number;
  name: string;
  region: string;
  platform: string;
  api_detail_url: string;
}
