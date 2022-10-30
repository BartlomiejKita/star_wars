import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./Reducers";
import { SwApi } from "../services/SwApi";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const reducers = combineReducers({
	favorite: favoriteReducer,
	[SwApi.reducerPath]: SwApi.reducer,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

export const persistor = persistStore(store);
