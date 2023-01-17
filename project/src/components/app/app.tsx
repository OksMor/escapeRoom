import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

import { getAuthorizationStatus } from '../../store/user-process/selector';
import { useAppSelector } from '../../hooks/hooks';
import { AppRoute, AuthorizationStatus } from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/no-found-screen/no-found-screen';
import QuestScreen from '../../pages/quest-screen/quest-screen';

import LoadingScreen from '../loading-screen/loading-screen';

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainScreen />}
          />
          {/* <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute >
                <MyListScreen />
              </PrivateRoute>
            }
          /> */}
          {/* <Route
            path={`${AppRoute.Film}/:id${AppRoute.AddReview}`}
            element={
              <PrivateRoute >
                <AddReviewScreen />
              </PrivateRoute>
            }
          /> */}
          {/* <Route
            path={`${AppRoute.Player}/:id`}
            element={<PlayerScreen />}
          /> */}
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
