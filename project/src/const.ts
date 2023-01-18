export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyReservations = '/reservation',
  Quest = '/quest',
  Booking = '/quest/:id/booking',
  Contacts = '/contacts',
}

export enum APIRoute {
  Quests = '/quest',
  Login = '/login',
  Logout = '/logout',
  Reservations = '/reservation',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  App = 'APP',
  User = 'USER',
  Quests = 'QUESTS',
  // PromoFilm = 'PROMOFILM',
  CurrentQuest = 'CURRENTQUEST',
  // SimilarFilms = 'SIMILARFILMS',
  // Reviews = 'REVIEWS',
  // FavoritesFilms = 'FAVORITESFILMS',
}

// export const PLAYER_DELAY = 1000;

// export enum ReviewLength {
//   Min = 50,
//   Max = 400
// }

export enum QuestType {
  All = 'all',
  Adventure = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export enum QuestLevel {
  Any = 'any',
  Easy = 'easy',
  Middle = 'medium',
  Hard = 'hard',
}

export const DIFFICULTY: Record<string, string> = {
  'hard': 'сложный',
  'medium': 'средний',
  'easy': 'легкий',
};

export const TYPE: Record<string, string> = {
  'horror': 'ужасы',
  'mystic': 'мистика',
  'detective': 'детектив',
  'adventures': 'приключения',
  'sci-fi': 'sci-fi',
};

export const DAYS: Record<string, string> = {
  'today': 'сегодня',
  'tomorrow': 'завтра',
};


export enum ErrorMessage {
  InvalidEmail = 'Please enter a valid email',
  InvalidPassword = 'Please enter a valid password',
}

export const EMAIL_PATTERN = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

export const PASSWORD_PATTERN = /([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/;

export enum SingInField {
  UserEmail = 'user-email',
  UserPassword = 'user-password',
}
