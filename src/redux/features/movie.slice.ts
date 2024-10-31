import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieList } from "../../types/type";

export interface MovieListState {
  list: IMovieList[];
  idCounter: number;
}

const initialState: MovieListState = {
  list: [],
  idCounter: 1,
};

export const MovieSlice = createSlice({
  name: "MovieList",
  initialState,
  reducers: {
    addMovie: (
      state,
      action: PayloadAction<{ name: string; genre: string; score: number }>
    ) => {
      state.list.push({
        id: state.idCounter,
        name: action.payload.name,
        genre: action.payload.genre,
        score: action.payload.score,
      });
      state.idCounter += 1;
      state.list.sort((a, b) => a.name.localeCompare(b.name));
    },
    removeMovie: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      state.list.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortName: (state) => {
      state.list.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortGenre: (state) => {
      state.list.sort((a, b) => a.genre.localeCompare(b.genre));
    },
    sortScore: (state) => {
      state.list.sort((a, b) => b.score - a.score);
    },
  },
});
export const MovieActions = MovieSlice.actions;
export const MovieReducer = MovieSlice.reducer;
