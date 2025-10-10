import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DetailGameInterface,
  DetailGameParams,
  InitialStateDetail,
  ResultScreenshot,
  ResultTrailer,
} from "./detail.interface";
import { config } from "@/config";
import { httpGet } from "@/store/http/http";

export const getDetailGameAction = createAsyncThunk(
  "get/detailgame",
  async (params: DetailGameParams) => {
    return await new Promise<DetailGameInterface>((resolve, reject) => {
      const paramsGet: DetailGameParams = { ...params, key: config.keyRawg };

      httpGet({
        params: paramsGet,
        url: `${config.baseUrlRawg}/games/${paramsGet.game_id}`,
      })
        .then((res) => {
          resolve(res);
          return res;
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
);

export const getScreenshotGameAction = createAsyncThunk(
  "get/screenshotgame",
  async (params: DetailGameParams) => {
    return await new Promise<ResultScreenshot[]>((resolve, reject) => {
      const paramsGet: DetailGameParams = { ...params, key: config.keyRawg };

      httpGet({
        params: paramsGet,
        url: `${config.baseUrlRawg}/games/${paramsGet.game_id}/screenshots`,
      })
        .then((res) => {
          resolve(res);
          return res.results;
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
);

export const getTrailerGameAction = createAsyncThunk(
  "get/trailergame",
  async (params: DetailGameParams) => {
    return await new Promise<ResultTrailer[]>((resolve, reject) => {
      const paramsGet: DetailGameParams = { ...params, key: config.keyRawg };

      httpGet({
        params: paramsGet,
        url: `${config.baseUrlRawg}/games/${paramsGet.game_id}/movies`,
      })
        .then((res) => {
          resolve(res);
          return res.results;
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
);

const initialState: InitialStateDetail = {
  isLoading: false,
  isError: false,
  data: {} as DetailGameInterface,
  isLoadingSs: false,
  isErrorSs: false,
  screenshot: [],
  isLoadingTrailer: false,
  isErrorTrailer: false,
  trailerData: [],
};

const detailGameSlice = createSlice({
  name: "detailGame",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetailGameAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetailGameAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getDetailGameAction.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.data = {} as DetailGameInterface;
    });
    builder.addCase(getScreenshotGameAction.pending, (state) => {
      state.isLoadingSs = true;
    });
    builder.addCase(getScreenshotGameAction.fulfilled, (state, action) => {
      state.isLoadingSs = false;
      state.screenshot = action.payload;
    });
    builder.addCase(getScreenshotGameAction.rejected, (state) => {
      state.isLoadingSs = false;
      state.screenshot = [];
      state.isErrorSs = true;
    });
    builder.addCase(getTrailerGameAction.pending, (state) => {
      state.isLoadingTrailer = true;
    });
    builder.addCase(getTrailerGameAction.fulfilled, (state, action) => {
      state.isLoadingTrailer = false;
      state.trailerData = action.payload;
    });
    // builder.addCase

    // ONPROGRESSS
  },
});

export default detailGameSlice.reducer;
