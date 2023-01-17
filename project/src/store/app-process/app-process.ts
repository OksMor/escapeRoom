import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../../types/state';
import { DEFAULT_GENRE_FILTER, NameSpace } from '../../const';

const initialState: AppState = {
  currentGenre: DEFAULT_GENRE_FILTER,

};

export const appProcess = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    genreSet: (state, action: PayloadAction<string>) => {
      state.currentGenre = action.payload;
    },
    genreReset: (state) => {
      state.currentGenre = DEFAULT_GENRE_FILTER;
    },
  },
});

export const {genreSet, genreReset } = appProcess.actions;
