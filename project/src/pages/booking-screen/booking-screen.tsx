import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { LeafletMouseEvent } from 'leaflet';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchCurrentQuestAction, fetchBookingAction } from '../../store/api-actions';
import { getCurrentQuest } from '../../store/current-quest-process/selector';
import { getQuestBooking } from '../../store/booking-process/selector';
import { QuestLocation } from '../../types/types';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FormBooking from '../../components/form-booking/form-booking';
import Map from '../../components/map/map';
import NotFoundScreen from '../no-found-screen/no-found-screen';

function BookingScreen(): JSX.Element {

  const params = useParams();
  const dispatch = useAppDispatch();

  const quest = useAppSelector(getCurrentQuest);
  const bookingInfo = useAppSelector(getQuestBooking);
  // const isBookingInfoLoading = useAppSelector(getIsBookingInfoLoading);

  const bookingLocations = [] as QuestLocation[];
  let defaultLocation = {} as QuestLocation;


  if (bookingInfo?.locations !== undefined) {
    bookingInfo.locations.forEach((booking) => bookingLocations.push({
      coords: [booking.coords[0], booking.coords[1]],
      id: booking.id,
      address: booking.address
    }));
    if (bookingInfo.locations.length > 0) {
      defaultLocation = bookingLocations[0];
    }
  }

  const [selectedPoint, setSelectedPoint] = useState(defaultLocation);

  const onMarkerClick = (e: LeafletMouseEvent) => {
    const clickedLocation = bookingLocations.find((loc) => loc.coords[0] === e.latlng.lat && loc.coords[1] === e.latlng.lng);
    if (clickedLocation) {
      setSelectedPoint(clickedLocation);
    }
  };

  useEffect(() => {
    dispatch(fetchBookingAction(String(params.id)));
    dispatch(fetchCurrentQuestAction(String(params.id)));
  }, [dispatch, params.id, selectedPoint]);

  return bookingInfo ? (
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
            <p className="title title--size-m title--uppercase page-content__title">{quest?.title}</p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <Map
                  locations = { bookingLocations }
                  selectedPoint = { Object.keys(selectedPoint).length === 0 ? defaultLocation : selectedPoint }
                  onClickFunction = { onMarkerClick }
                />
              </div>
              <p className="booking-map__address">Вы&nbsp;выбрали: { Object.keys(selectedPoint).length === 0 ? defaultLocation.address : selectedPoint.address }</p>
            </div>
          </div>

          <FormBooking questBooking = { bookingInfo } />

        </div>
      </main>
      <Footer/>
    </>
  ) : <NotFoundScreen/>;
}

export default BookingScreen;
