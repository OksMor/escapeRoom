export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyReservations = '/reservation',
  Quest = '/quest',
  Booking = '/quest/:id/booking',
  Contacts = '/contacts',
}

export enum APIRoute {
  Quests = 'escape-room/quest',
  Login = 'escape-room/login',
  Logout = 'escape-room/logout',
  Reservations = 'escape-room/reservation',
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
  CurrentQuest = 'CURRENTQUEST',
  // Reviews = 'REVIEWS',
  ReservationQuests = 'RESERVATIONSQUESTS',
}

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

export const QUESTS_TYPES = [
  {id: 'all', icon: '#icon-all-quests', width: '26', type: 'Все квесты', questType: QuestType.All},
  {id: 'adventure', icon: '#icon-adventure', width: '36', type: 'Приключения', questType: QuestType.Adventure},
  {id: 'horror', icon: '#icon-horror', width: '30', type: 'Ужасы', questType: QuestType.Horror},
  {id: 'mystic', icon: '#icon-mystic', width: '30', type: 'Мистика', questType: QuestType.Mystic},
  {id: 'detective', icon: '#icon-detective', width: '40', type: 'Детектив', questType: QuestType.Detective},
  {id: 'sciFi', icon: '#icon-sci-fi', width: '28', type: 'Sci-fi', questType: QuestType.SciFi},
];

export enum QuestLevel {
  Any = 'any',
  Easy = 'easy',
  Middle = 'medium',
  Hard = 'hard',
}

export const QUESTS_LEVELS = [
  {id: 'any', level: 'Любой', questLevel: QuestLevel.Any},
  {id: 'easy', level: 'Лёгкий', questLevel: QuestLevel.Easy},
  {id: 'middle', level: 'Средний', questLevel: QuestLevel.Middle},
  {id: 'hard', level: 'Сложный', questLevel: QuestLevel.Hard},
];

export const LEVEL_QUEST: Record<string, string> = {
  'hard': 'сложный',
  'medium': 'средний',
  'easy': 'легкий',
};

export const TYPE_QUEST: Record<string, string> = {
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

export const CONTACTS = {
  address: {
    city: 'Санкт-Петербург,',
    full: 'Набережная реки Карповка, д 5П',
  },
  mode: 'Ежедневно, c 10:00 до 22:00',
  phone: '8 (000) 111-11-11',
  phoneHref: 'tel:88003335599',
  mail: 'info@escape-room.ru',
  mailHref: 'mailto:info@escape-room.ru',
  lat: 59.968137,
  lng: 30.316272,
};

export enum UrlMapMarket {
  Default = 'img/svg/pin-default.svg',
  Current = 'img/svg/pin-active.svg',
}
