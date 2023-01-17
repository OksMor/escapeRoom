type Quest = {
  id: number;
  title: string;
  previewImage: string;
  previewImgWebp: string;
  level: string; //enum --- easy┃medium┃hard Allowed
  type: string;  //enum --- adventures┃horror┃mystic┃detective┃sci-fi Allowed
  peopleMinMax: [number, number];
}

type Request = {
  id: number;
  title: string;
  previewImage: string;
  previewImgWebp: string;
  level: string; //enum --- easy┃medium┃hard Allowed
  type: string;  //enum --- adventures┃horror┃mystic┃detective┃sci-fi Allowed
  peopleMinMax: [number];

  description: string;
  coverImg: string;
  coverImgWeb: string;
}

type Booking = {
  id: number
  locations: [{
    id: number
    address: string
    coords: [number]//    Ключ coords представлен массивом из двух значений. Например, [59.968322, 30.317359].
  }]
  slots: {
    today: [{
    time: string
    isAvailable: boolean
    }]
    tomorrow: [{
    time: string
    isAvailable: boolean
    }]}
}

type NewBooking = {
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

type AuthData = {
  email: string;
  password: string;
};

type UserData = {
  email: string;
  token: string;
};

export type { Quest, Request, Booking, NewBooking, AuthData, UserData };
