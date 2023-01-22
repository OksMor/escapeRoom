import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AuthData, UserData, Quest, BookingInfo } from '../types/types';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
// import { toast } from 'react-toastify';

export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, { // vse kvesti
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, {extra: api}) => (await api.get<Quest[]>(APIRoute.Quests)).data,
);

export const fetchCurrentQuestAction = createAsyncThunk<Quest, string, { // odin kvest
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentQuest',
  async (questId, {extra: api}) => (await api.get<Quest>(`${APIRoute.Quests}/${questId}`)).data,
);

export const fetchReservationQuestsAction = createAsyncThunk<Quest[], undefined, { // moi bronirovaniya
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReservationQuests',
  async (_arg, {extra: api}) => (await api.get<Quest[]>(APIRoute.Reservations)).data,
);

export const deleteReservationQuestAction = createAsyncThunk<string, string, {// ---------------------- ydalenie bronirovaniya !!!!!!!!!!!!!!!!!!!!!!!!!!!
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/deleteQuestReservation',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.delete<string>(`${APIRoute.Reservations}/${id}`);
    // dispatch(fetchQuestsReservationAction());
    return data;
  },
);

//-----------------------------------------------------------------------------------------------------------------------------------------

export const fetchBookingAction = createAsyncThunk<BookingInfo[], string, { // dai polya dlya zapolneniya pri bronirovanii
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchBooking',
  async (questId, {extra: api}) => (await api.get<BookingInfo[]>(`${APIRoute.Quests}/${questId}/booking`)).data,
);
// ---------------------------------------------------------------------------------------------------------------------------POST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// export const sendQuestBookedAction = createAsyncThunk<QuestBooked, QuestBooked, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/sendQuestBooked',
//   async (questBooked, {dispatch, extra: api}) => {
//     const {data} = await api.post<QuestBooked>(`${APIRoute.Quests}/${questBooked.id}/booking`, questBooked);
//     dispatch(redirectToRoute(AppRoute.MyQuests));
//     dispatch(fetchQuestsReservationAction());
//     return data;
//   },
// );

// export const postBookingAction = createAsyncThunk<Review, {
//   userReview: NewReview;
//   setFormSubmitStateCb: React.Dispatch<React.SetStateAction<boolean>>;
//   activeId: number;
//   }, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'user/postNewReview',
//   async (formData, {dispatch, extra: api}) => {
//     try {
//       const newReview: Review = (await api.post<Review>(`${APIRoute.Review}/${formData.activeId}`, formData.userReview)).data;
//       formData.setFormSubmitStateCb(false);
//       dispatch(redirectToRoute(`${AppRoute.Film}/${formData.activeId}`));
//       return newReview;
//     } catch (err) {
//       toast.error('something went wrong please try again later...');
//       formData.setFormSubmitStateCb(true);
//       throw err;
//     }
//   }
// );

// export const postReservationStatusAction = createAsyncThunk<void, [number, boolean], {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/postReservationStatus',
//   async ([id, status], { dispatch, extra: api}) => {
//     await api.post<Quest>(`${APIRoute.Reservations}/${id}/${Number(status)}`);
//     dispatch(fetchReservationQuestsAction());
//   },
// );

// ------------------------------------------------------------------------------------

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
    dispatch(redirectToRoute(AppRoute.Root));
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
