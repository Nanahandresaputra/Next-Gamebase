export interface ListGenresParams {
  key?: string;
}

export interface InitialState {
  isLoading: boolean;
  isError: boolean;
  data: ListGenres[];
}

export interface ListGenres {
  id: number;
  name: string;
  slug: string;
}
