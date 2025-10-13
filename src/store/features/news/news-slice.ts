import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateNews, ResultNewsInterface } from "./news.interface";
import { httpGet } from "@/store/http/http";

export const getNewsAction = createAsyncThunk("get/news", async () => {
  return await new Promise<ResultNewsInterface[]>((resolve, reject) => {
    httpGet({ url: `api/news` })
      .then((res) => {
        resolve(res.results);
        return res.results;
      })
      .catch((err) => {
        reject(err);
      });
  });
});

const initialState: InitialStateNews = {
  isLoadingNews: false,
  isErrorNews: false,
  data: [],
};

const newsSlice = createSlice({
  name: "newsgame",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewsAction.pending, (state) => {
      state.isLoadingNews = true;
    });
    builder.addCase(getNewsAction.fulfilled, (state, action) => {
      state.isLoadingNews = false;
      state.data = action.payload;
    });
    builder.addCase(getNewsAction.rejected, (state) => {
      state.isLoadingNews = false;
      state.isErrorNews = true;
      state.data = [];
    });
  },
});

export default newsSlice.reducer;
