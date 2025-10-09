import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, ListGameParams, ListGames } from "./game.interface";
import { config } from "@/config";
import { httpGet } from "@/store/http/http";

export const getListGamesAction = createAsyncThunk(
  "get/listgames",
  async (params: ListGameParams) => {
    return await new Promise<ListGames>((resolve, reject) => {
      const paramsGet: ListGameParams = {
        ...params,
        key: config.keyRawg,
        page_size: params.page === 1 ? 15 : 12,
        platforms: 4,
      };
      httpGet({ params: paramsGet, url: `${config.baseUrlRawg}/games` })
        .then((res) => {
          resolve(res);
          return {
            count: res.count,
            result: res.result,
          };
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
);

const initialState: InitialState = {
  isLoading: false,
  isError: false,
  data: {
    count: 0,
    results: [],
  },
  currentState: 1,
};

const listGameSlice = createSlice({
  name: "listGames",
  initialState,
  reducers: {
    currentPage: (state, action: PayloadAction<number>) => {
      state.currentState = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getListGamesAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListGamesAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = {
        ...state.data,
        count: action.payload.count,
        results:
          state.currentState === 1
            ? action.payload.results
            : [...state.data.results, ...action.payload.results],
      };
    });
    builder.addCase(getListGamesAction.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.data = {
        count: 0,
        results: [],
      };
    });
  },
});

export const setListGamesAction = listGameSlice.actions;
export default listGameSlice.reducer;
