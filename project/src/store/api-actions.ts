import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AuthData, UserData, Quest } from '../types/types';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
// import { toast } from 'react-toastify';

export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, {extra: api}) => (await api.get<Quest[]>(APIRoute.Quests)).data,
);

// export const fetchCurrentFilmAction = createAsyncThunk<Film, string, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchCurrentFilm',
//   async (filmId, {extra: api}) => (await api.get<Film>(`${APIRoute.Films}/${filmId}`)).data,
// );

// export const fetchSimilarFilmsAction = createAsyncThunk<Film[], string, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchSimilarFilms',
//   async (filmId, {extra: api}) =>
//     (await api.get<Film[]>(`${APIRoute.Films}/${filmId}/similar`)).data.filter((film) => film.id.toString() !== filmId).slice(0, SIMILAR_COUNT),
// );

// export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchPromoFilm',
//   async (_arg, {extra: api}) => (await api.get<Film>(APIRoute.Promo)).data,
// );

// export const fetchReviewsAction = createAsyncThunk<Review[], string, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchReviews',
//   async (filmId, {extra: api}) => (await api.get<Review[]>(`${APIRoute.Review}/${filmId}`)).data,
// );

// export const postNewReviewAction = createAsyncThunk<Review, {
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

// export const fetchFavoritesFilmsAction = createAsyncThunk<Film[], undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchFavoritesFilm',
//   async (_arg, {extra: api}) => (await api.get<Film[]>(APIRoute.Favorites)).data,
// );

// export const postFavoriteStatusAction = createAsyncThunk<void, [number, boolean], {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/postFavoriteStatus',
//   async ([id, status], { dispatch, extra: api}) => {
//     await api.post<Film>(`${APIRoute.Favorites}/${id}/${Number(status)}`);
//     dispatch(fetchFavoritesFilmsAction());
//   },
// );

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
  async ({email, password}, {dispatch, extra: api}) => {
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
