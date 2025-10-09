import { configureStore } from "@reduxjs/toolkit";
import listGamesReducer from "@/store/features/game/game-slice";
// ...

export const store = configureStore({
  reducer: {
    listGames: listGamesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
