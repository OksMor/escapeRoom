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
  level: QuestType; //enum --- easy┃medium┃hard Allowed
  type: QuestLevel; //enum --- adventures┃horror┃mystic┃detective┃sci-fi Allowed
  peopleMinMax: [number, number];

  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type Booking = {//-----------------------------------------------------------не исп
  id: number;
  locations: [{
    id: number;
    address: string;
    coords: [number]; // Например, [59.968322, 30.317359].
  }];
  slots: {
    today: [{
      time: string;
      isAvailable: boolean;
    }];
    tomorrow: [{
      time: string;
      isAvailable: boolean;
    }];
  };
}

export type MarkerLocation = {//-----------------------------------------------------------не исп
  lat: number;
  lng: number;
  id: number;
  address: string;
};

type NewBooking = { //-----------------------------------------------------------не исп
  id: number;
  //date: enum;
  //today ┃ tomorrow;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  locationId: number;
  questId: number;
}
