import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { AuthorizationStatus } from '../../const';

import { fetchQuestsAction, fetchReservationQuestsAction } from '../../store/api-actions';
import { getIsQuestsLoading } from '../../store/quests-process/selector';
import { getAuthorizationStatus } from '../../store/user-process/selector';
import { getFilterQuests } from '../../store/app-process/selector';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import LoadingScreen from '../../components/loading-screen/loading-screen';

import QuestsList from '../../components/quests-list/quests-list';
import QuestTypeList from '../../components/quest-type-list/quest-type-list';
import QuestLevelList from '../../components/quest-level-list/quest-level-list';

function MainScreen(): JSX.Element {

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const quests = useAppSelector(getFilterQuests);
  const isQuestsLoading = useAppSelector(getIsQuestsLoading);


  useEffect(() => {
    dispatch(fetchQuestsAction());
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchReservationQuestsAction());
    }
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>EscapeRoom</title>
      </Helmet>

      <Header/>

      <main className="page-content">
        <div className="container">

          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге</h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>

          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <QuestTypeList/>
              <QuestLevelList/>
            </form>
          </div>

          <h2 className="title visually-hidden">Выберите квест</h2>

          {isQuestsLoading ? <LoadingScreen/> : <QuestsList quests={quests} />}

        </div>
      </main>

      <Footer/>
    </>
  );
}

export default MainScreen;
