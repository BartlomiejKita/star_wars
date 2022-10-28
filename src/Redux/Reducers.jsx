import { createReducer } from "@reduxjs/toolkit";
import { addFavorite} from "./Actions";

const initialState = {
	favorite: [],
	
};

export const favoriteReducer = createReducer(
	initialState.favorite,
	(builder) => {
		builder.addCase(addFavorite, (_, { payload }) => {
			return payload;
		});
	}
);


