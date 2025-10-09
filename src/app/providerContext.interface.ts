import { Dispatch, SetStateAction } from "react";

export interface DetailNewsImage {
  square_tiny: string;
  screen_tiny: string;
  square_small: string;
  original: string;
}

export interface DetailNewsInterface {
  image: DetailNewsImage;
  authors: string;
  title: string;
  body: string;
  publish_date: string;
}

export interface GlobalContextInterface {
  detailNews: DetailNewsInterface;
  setDetailNews: Dispatch<SetStateAction<DetailNewsInterface>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  selectGenre: string;
  setSelectGenre: Dispatch<SetStateAction<string>>;
}
