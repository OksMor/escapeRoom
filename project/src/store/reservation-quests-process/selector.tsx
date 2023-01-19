import { Quest } from '../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getFavoritesFilms = (state: State): Quest[] => state[NameSpace.ReservationQuests].quests;

export const getIsFavoritesFilmsLoading = (state: State): boolean => state[NameSpace.ReservationQuests].isLoading;
