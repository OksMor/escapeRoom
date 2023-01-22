import { QuestType, QuestLevel } from '../const';

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  email: string;
  token: string;
};

export type Quest = {
  id: number;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestType;
  type: QuestLevel;
  peopleMinMax: number[];

  description?: string;
  coverImg?: string;
  coverImgWebp?: string;
}

export type QuestLocation = {
  id: number;
  address: string;
  coords: number[];
};
export type QuestDate = [{
  time: string;
  isAvailable: boolean;
}];

export type Slots = {
  today: QuestDate[];
  tomorrow :QuestDate[];
};

export type BookingInfo = [{
  id: number;
  locations: QuestLocation[];
  slots: Slots;
}];

export type BookingData = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  locationId: number;
  questId: number;
};

export type UserBooking = {
  date: string;
  id: number;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  location: QuestLocation;
  quest: {
    id: number;
    title: string;
    previewImg: string;
    level: string;
    type: string;
    peopleMinMax: number[];
  };
};

// export type Booking = {
//   id: number;
//   locations: [{
//     id: number;
//     address: string;
//     coords: [number];
//   }];
//   slots: {
//     today: [{
//       time: string;
//       isAvailable: boolean;
//     }];
//     tomorrow: [{
//       time: string;
//       isAvailable: boolean;
//     }];
//   };
// }
