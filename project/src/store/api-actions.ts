import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AuthData, UserData, Quest, BookingInfo, BookingData, UserBooking } from '../types/types';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';

export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, {extra: api}) => (await api.get<Quest[]>(APIRoute.Quests)).data,
);

export const fetchCurrentQuestAction = createAsyncThunk<Quest, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentQuest',
  async (questId, {extra: api}) => (await api.get<Quest>(`${APIRoute.Quests}/${questId}`)).data,
);

export const fetchReservationQuestsAction = createAsyncThunk<UserBooking[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReservationQuests',
  async (_arg, {extra: api}) => (await api.get<UserBooking[]>(APIRoute.Reservations)).data,
);

export const deleteReservationQuestAction = createAsyncThunk<string, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/deleteQuestReservation',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.delete<string>(`${APIRoute.Reservations}/${id}`);
    dispatch(fetchReservationQuestsAction());
    return data;
  },
);

export const fetchBookingAction = createAsyncThunk<BookingInfo, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchBooking',
  async (questId, {extra: api}) => (await api.get<BookingInfo>(`${APIRoute.Quests}/${questId}/booking`)).data,
);

export const postQuestBookedAction = createAsyncThunk<BookingData, BookingData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postQuestBooked',
  async (questBooked, {dispatch, extra: api}) => {
    const {data} = await api.post<BookingData>(`${APIRoute.Quests}/${questBooked.questId}/booking`, questBooked);
    dispatch(redirectToRoute(AppRoute.MyReservations));
    dispatch(fetchReservationQuestsAction());
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => (await api.get<UserData>(APIRoute.Login)).data,
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
