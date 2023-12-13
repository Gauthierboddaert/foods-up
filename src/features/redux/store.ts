import { combineReducers, createStore } from "@reduxjs/toolkit";
import userReducer from "./user/userReducer";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof rootReducer>;