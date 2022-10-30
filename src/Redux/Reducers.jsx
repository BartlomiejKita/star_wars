import { createReducer } from "@reduxjs/toolkit";
import { addFavorite, deleteFavorite } from "./Actions";

const initialState = {
	name: [],
};

export const favoriteReducer = createReducer(initialState.name, (builder) => {
	builder
		.addCase(addFavorite, (state, { payload }) => {
			return [...state, payload];
		})
		.addCase(deleteFavorite, (state, { payload }) => {
			return state.filter(( name ) => name !== payload);
		});
});
