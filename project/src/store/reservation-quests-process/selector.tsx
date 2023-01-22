import { Quest } from '../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getReservationQuests = (state: State): Quest[] => state[NameSpace.ReservationQuests].quests;

export const getIsReservationQuestsLoading = (state: State): boolean => state[NameSpace.ReservationQuests].isLoading;
