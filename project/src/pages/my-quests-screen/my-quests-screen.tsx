import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import QuestCardReservation from '../../components/quest-card-reservation/quest-card-reservation';

import { getReservationQuests } from '../../store/reservation-quests-process/selector';
import { fetchReservationQuestsAction } from '../../store/api-actions';

function MyQuestsScreen(): JSX.Element {

  const userQuests = useAppSelector(getReservationQuests);

  const dispatch = useAppDispatch();

  useEffect(
    () => {
      dispatch(fetchReservationQuestsAction());
    }, [dispatch]
  );

  return (
    <>
      <Helmet>
        <title>EscapeRoom. My Quests</title>
      </Helmet>
      <Header/>

      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"/>
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt=""/>
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <div className="cards-grid">
            {userQuests.map((quest) => <QuestCardReservation key={quest.id} quest={quest}/>)}
          </div>

        </div>
      </main>

      <Footer/>
    </>
  );
}

export default MyQuestsScreen;
