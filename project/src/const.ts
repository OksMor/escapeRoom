export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  // MyList = '/mylist',
  Quest = '/quests/:id',
  // AddReview = '/review',
  // Player = '/player',
}

export enum APIRoute {
  Quests = '/quest',
  Login = '/login',
  Logout = '/logout',
  // Promo = '/promo',
  // Review = '/comments',
  // Favorites = '/favorite',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum NameSpace {
  App = 'APP',
  User = 'USER',
  Quests = 'QUESTS',
  // PromoFilm = 'PROMOFILM',
  // CurrentFilm = 'CURRENTFILM',
  // SimilarFilms = 'SIMILARFILMS',
  // Reviews = 'REVIEWS',
  // FavoritesFilms = 'FAVORITESFILMS',
}

// export const PLAYER_DELAY = 1000;

export const DEFAULT_GENRE_FILTER = 'All Genres';

// export enum ReviewLength {
//   Min = 50,
//   Max = 400
// }

export enum LevelQuest{
  Easy,
  Medium,
  Hard,
}

export enum TypeQuest {
  Adventures,
  Horror,
  Mystic,
  Detective,
  SciFi,
  Allowed,
}
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
