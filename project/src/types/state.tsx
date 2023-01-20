import { store } from '../store/index.js';
import { AuthorizationStatus } from '../const.js';
import { UserData, Quest, Booking } from './types.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  authorizedUser: UserData | null;
};

export type AppState = {
  currentType: string;
  currentLevel: string;
};

export type QuestsState = {
  quests: Quest[];
  isLoading: boolean;
};

export type CurrentQuestState = {
  quest: Quest | null;
  isLoading: boolean;
};

export type ReservationQuestsState = {
  quests: Quest[];
  isLoading: boolean;
};

export type BookingState = {
  comments: Booking[];
  isLoading: boolean;
};
