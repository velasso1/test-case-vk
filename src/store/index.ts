import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import movies from "./slices/movies-slice";
import movieInformation from './slices/movie-information-slice';

const rootReducer = combineReducers({
  movies: movies,
  movieInformation: movieInformation,
});

const resultConfigureStore = configureStore({
  reducer: rootReducer,
});

export default resultConfigureStore;

export type RootState = ReturnType<typeof resultConfigureStore.getState>;
export type AppDispatch = typeof resultConfigureStore.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
