import { configureStore } from "@reduxjs/toolkit";
import listGamesReducer from "@/store/features/game/game-slice";
import detailGameReducer from "@/store/features/game-detail/detail-slice";
import newsReducer from "@/store/features/news/news-slice";

export const store = configureStore({
  reducer: {
    listGames: listGamesReducer,
    detailGame: detailGameReducer,
    newsGame: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
