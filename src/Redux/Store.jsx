import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./Reducers";
import { SwApi } from "../services/SwApi";

export const store = configureStore({
	reducer: {
		favorite: favoriteReducer,
		[SwApi.reducerPath]: SwApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(SwApi.middleware),
});
