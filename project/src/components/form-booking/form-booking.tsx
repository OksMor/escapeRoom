// import { useEffect, useState } from 'react';

// import { useAppDispatch } from '../../hooks/hooks';

// import { fetchBookingAction, fetchCurrentQuestAction } from '../../store/api-actions';

// import { BookingInfo } from '../../types/types';

// type FormBookingProps = {
//   questBooking: BookingInfo[];
// }

function FormBooking(): JSX.Element { //props: FormBookingProps

  // const { questBooking } = props;

  // const [ formData, setFormData ] = useState(
  //   date: '',
  //   time: '',
  //   contactPerson: '',
  //   phone: '',
  //   withChildren: false,
  //   peopleCount: 0,
  // );

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (questBooking.id) {
  //     dispatch(fetchCurrentQuestAction(questBooking.id));
  //     dispatch(fetchBookingAction(questBooking.id));
  //   }
  // }, [questBooking.id, dispatch]);

  // const onSubmit = (data: BookingData) => {

  //   const slotTime = data.time.split(' ');

  //   if (id) {
  //     dispatch(sendQuestBookedAction({
  //       id: Number(id),
  //       date: slotTime[0],
  //       time: slotTime[1],
  //       contactPerson: data.name,
  //       phone: data.tel,
  //       withChildren: data.children,
  //       peopleCount: Number(data.person),
  //       locationId: 1,
  //       questId: Number(id),
  //     }
  //     ));
  //   }
  // };
  //onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post">
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>

        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">

            <label className="custom-radio booking-form__date">
              <input type="radio" id="today9h45m" name="date" value="today9h45m" required/><span className="custom-radio__label">9:45</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="today15h00m" name="date" value="today15h00m" required/><span className="custom-radio__label">15:00</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="today17h30m" name="date" value="today17h30m" required/><span className="custom-radio__label">17:30</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="today19h30m" name="date" value="today19h30m" required disabled/><span className="custom-radio__label">19:30</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="today21h30m" name="date" value="today21h30m" required/><span className="custom-radio__label">21:30</span>
            </label>
          </div>
        </fieldset>

        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            <label className="custom-radio booking-form__date">
              <input type="radio" id="tomorrow11h00m" name="date" value="tomorrow11h00m" required/><span className="custom-radio__label">11:00</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="tomorrow15h00m" name="date" value="tomorrow15h00m" required disabled/><span className="custom-radio__label">15:00</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="tomorrow17h30m" name="date" value="tomorrow17h30m" required disabled/><span className="custom-radio__label">17:30</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="tomorrow19h45m" name="date" value="tomorrow19h45m" required/><span className="custom-radio__label">19:45</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="tomorrow21h30m" name="date" value="tomorrow21h30m" required/><span className="custom-radio__label">21:30</span>
            </label>
          </div>
        </fieldset>

      </fieldset>

      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input type="text" id="name" name="name" placeholder="Имя" pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"/>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input type="tel" id="tel" name="tel" placeholder="Телефон" required pattern="[0-9]{10,}"/>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input type="number" id="person" name="person" placeholder="Количество участников" required/>
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" name="children" />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>

      <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>

      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required/>
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="/">правилами обработки персональных данных</a>
          &пользовательским соглашением
        </span>
      </label>

    </form>
  );
}

export default FormBooking;
