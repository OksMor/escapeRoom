import { Helmet } from 'react-helmet-async';

import { CONTACTS } from '../../const';

import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Map from '../../components/map/map';



type MarkerLocation = {
  latitude: number;
  longitude: number;
  locationId: number;
  address: string;
};

const CONTACT_LOCATION: MarkerLocation = {
  latitude: 59.969718,
  longitude: 30.307523,
  locationId: 0,
  address: 'Санкт-Петербург, Набережная реки Карповка, д 5П'
};

function ContactsScreen(): JSX.Element {

  const locations: MarkerLocation[] = [CONTACT_LOCATION];

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
        <div className="container">
          <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
            <p className="subtitle page-content__subtitle">квесты в&nbsp;Санкт-Петербурге
            </p>
            <h1 className="title title--size-m page-content__title">Контакты</h1>
          </div>
          <div className="contacts">
            <dl className="contacts__list">
              <div className="contacts__item">
                <dt className="contacts__dt">Адрес</dt>
                <dd className="contacts__dd">
                  <address className="contacts__address">{CONTACTS.address.city}<br/>{CONTACTS.address.full}</address>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Режим работы</dt>
                <dd className="contacts__dd">{CONTACTS.mode}</dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Телефон</dt>
                <dd className="contacts__dd">
                  <a className="link" href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">E&ndash;mail</dt>
                <dd className="contacts__dd">
                  <a className="link" href={CONTACTS.mailHref}>{CONTACTS.mail}</a>
                </dd>
              </div>
            </dl>
            <div className="contacts__map">
              <div className="map">
              <Map
                    locations = { locations }
                    selectedPoint = {{} as MarkerLocation}
                    onClickFunction = { () => void {} }
                  />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default ContactsScreen;
