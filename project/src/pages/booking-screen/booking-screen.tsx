import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchCurrentQuestAction } from '../../store/api-actions';
import { getCurrentQuest } from '../../store/current-quest-process/selector';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FormBooking from '../../components/form-booking/form-booking';
import Map from '../../components/map/map';

function BookingScreen(): JSX.Element {

  const params = useParams();
  const dispatch = useAppDispatch();

  const quest = useAppSelector(getCurrentQuest);

  useEffect(() => {
    if (params.id && quest?.id.toString() !== params.id) {
      dispatch(fetchCurrentQuestAction(params.id));
    }
  }, [params.id, dispatch, quest?.id]);

  return (
    <>
      <Helmet>
        <title>EscapeRoom. Contacts</title>
      </Helmet>
      <Header/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"/>
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt=""/>
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">Маньяк</p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <Map
                  locations = {locations}
                  selectedPoint = {{} as MarkerLocation}
                  onClickFunction = { () => void {} }
                />
              </div>
              <p className="booking-map__address">Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м. Петроградская</p>
            </div>
          </div>

          <FormBooking/>

        </div>
      </main>
      <Footer/>
    </>
  );
}

export default BookingScreen;
