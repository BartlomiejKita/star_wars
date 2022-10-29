import { createReducer } from "@reduxjs/toolkit";
import { addFavorite } from "./Actions";

const initialState = {
	favorite: false,
	data: [],
};

export const favoriteReducer = createReducer(
	initialState.favorite,
	(builder) => {
		builder.addCase(addFavorite, (state, { payload }) => {
			return !state;
		});
	}
);
