import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import PrivateRoute from '../private-route/private-route';
import HistoryRoute from '../history-route/history-route';
import browserHistory from '../../browser-history';

import { useAppSelector } from '../../hooks/hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selector';
import { getErrorStatus } from '../../store/quests-process/selector';

import MainScreen from '../../pages/main-screen/main-screen';
import QuestScreen from '../../pages/quest-screen/quest-screen';
import ContactsScreen from '../../pages/contacts-screen/contacts-screen';
import MyQuestsScreen from '../../pages/my-quests-screen/my-quests-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import BookingScreen from '../../pages/booking-screen/booking-screen';

import NotFoundScreen from '../../pages/no-found-screen/no-found-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';

import LoadingScreen from '../loading-screen/loading-screen';

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const hasError = useAppSelector(getErrorStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <ErrorScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRoute history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainScreen />}
          />
          <Route
            path={AppRoute.MyReservations}
            element={
              <PrivateRoute >
                <MyQuestsScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Booking}
            element={
              <PrivateRoute >
                <BookingScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Contacts}
            element={<ContactsScreen />}
          />
          <Route
            path={`${AppRoute.Quest}/:id`}
            element={<QuestScreen />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<LoginScreen />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </HistoryRoute>
    </HelmetProvider>
  );
}

export default App;
