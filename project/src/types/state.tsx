import { store } from '../store/index.js';
import { AuthorizationStatus } from '../const.js';
import { UserData, Quest } from './types.js'; //, Request, Booking, NewBooking, AuthData Quest

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

// export type ReviewsState = {
//   comments: Review[];
//   isLoading: boolean;
// };

export type ReservationQuestsState = {
  quests: Quest[];
  isLoading: boolean;
};
