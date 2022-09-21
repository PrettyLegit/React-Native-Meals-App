import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "@src/store/redux/favorites";
export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
