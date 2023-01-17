import { createSelector } from '@reduxjs/toolkit';
import { Quest } from '../../types/types';
import { State } from '../../types/state';
import { DEFAULT_GENRE_FILTER, NameSpace } from '../../const';

export const getQuests = (state: State): Quest[] => state[NameSpace.Quests].quests;

export const getCurrentGenre = (state: State): string => state[NameSpace.App].currentGenre;

export const getFilteredQuests = createSelector(
  [getQuests, getCurrentGenre],
  (films, genre) => {
    if (genre === DEFAULT_GENRE_FILTER) {
      return films;
    }
    // return films.filter((film) => film.genre === genre);
  }
);
