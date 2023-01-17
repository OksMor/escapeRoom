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
  currentGenre: string;
};

export type QuestsState = {
  quests: Quest[];
  isLoading: boolean;
};

// export type PromoFilmState = {
//   film: Film | null;
//   isLoading: boolean;
// };

// export type CurrentFilmState = {
//   film: Film | null;
//   isLoading: boolean;
// };

// export type SimilarFilmsState = {
//   films: Film[];
//   isLoading: boolean;
// };

// export type ReviewsState = {
//   comments: Review[];
//   isLoading: boolean;
// };

// export type FavoritesFilmsState = {
//   films: Film[];
//   isLoading: boolean;
// };
