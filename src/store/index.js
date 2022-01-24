import {
	configureStore,
	combineReducers,
	getDefaultMiddleware,
} from "@reduxjs/toolkit";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import linkReducer from "./slice/linkSlice";

import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const rooReducer = combineReducers({ links: linkReducer });

const persistedReducer = persistReducer(persistConfig, rooReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
export const persistor = persistStore(store);
