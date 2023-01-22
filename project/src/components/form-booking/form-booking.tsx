import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { fetchBookingAction, fetchCurrentQuestAction, postQuestBookedAction } from '../../store/api-actions';
import { getCurrentQuest } from '../../store/current-quest-process/selector';

import { BookingInfo } from '../../types/types';

type FormBookingProps = {
  questBooking: BookingInfo;
}

type formFieldset = {
  name: string;
  tel: string;
  person: number;
  children: boolean;
  agreement: boolean;
  time: string;
}

function FormBooking(props: FormBookingProps): JSX.Element {
  const { questBooking } = props;

  const params = useParams();
  const dispatch = useAppDispatch();

  const quest = useAppSelector(getCurrentQuest);

  useEffect(() => {
    dispatch(fetchBookingAction(String(params.id)));
    dispatch(fetchCurrentQuestAction(String(params.id)));
  }, [dispatch, params.id]);

  const { register, handleSubmit, formState: { errors } } = useForm<formFieldset>();

  const onSubmit = (data: formFieldset) => {

    const slotTime = data.time.split(' ');

    if (params.id) {
      dispatch(postQuestBookedAction({
        // id: Number(params.id),
        date: slotTime[0],
        time: slotTime[1],
        contactPerson: data.name,
        phone: data.tel,
        withChildren: data.children,
        peopleCount: Number(data.person),
        locationId: 1,
        questId: Number(params.id),
      }
      ));
    }
  };

  const checkPersonValidate = (person: number) => {
    if (quest) {
      if (person > quest.peopleMinMax[0] && person < quest.peopleMinMax[1]) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>

        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {questBooking.slots.today.map((slot) => (
              <label className="custom-radio booking-form__date" key={slot.time}>
                <input type="radio" id={slot.time} value={`today ${slot.time}`} disabled={!slot.isAvailable} {...register('time', { required: true })}/>
                <span className="custom-radio__label">{slot.time}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {questBooking.slots.tomorrow.map((slot) => (
              <label className="custom-radio booking-form__date" key={slot.time}>
                <input type="radio" id={slot.time} value={`tomorrow ${slot.time}`} disabled={!slot.isAvailable} {...register('time', { required: true })} />
                <span className="custom-radio__label">{slot.time}</span>
              </label>
            ))}
          </div>
        </fieldset>

      </fieldset>

      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input type="text" id="name" placeholder="Имя" {...register('name', { required: true, pattern: /^[A-Za-zА-Яа-яЁё]{1,15}$/ })} aria-invalid={errors.name ? 'true' : 'false'}/>
          {errors.name?.type === 'required' && <><br/><span role="alert">Укажите Ваше имя</span></>}
          {errors.name?.type === 'pattern' && <><br/><span role="alert">Имя должно содержать от 1 до 15 символов</span></>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input type="tel" id="tel" placeholder="Телефон" {...register('tel', { required: true, pattern: /^((\+7)+([0-9]){10})$/ })} aria-invalid={errors.name ? 'true' : 'false'}/>
          {errors.tel?.type === 'required' && <><br/><span role="alert">Укажите, пожалуйста, Ваш телефон</span></>}
          {errors.tel?.type === 'pattern' && <><br/><span role="alert">Номер формата +7(000) 000-00-00 (Ру-формат)</span></>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input type="number" id="person" placeholder="Количество участников" {...register('person', { required: true, validate: { checkPersonValidate } })} aria-invalid={errors.person ? 'true' : 'false'}/>
          {errors.person?.type === 'required' && <><br/><span role="alert">Введите количество желающих</span></>}
          {errors.person?.type === 'validate' && <><br/><span role="alert">Количество желающих должно совпадать с описанием квеста</span></>}
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" {...register('children')} />
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
        <input type="checkbox" id="id-order-agreement" {...register('agreement', { required: true })} aria-invalid={errors.agreement ? 'true' : 'false'}/>
        {errors.agreement?.type === 'required' && <><br/><span role="alert">Ознакомтесь, пожалуйста, с правилами</span></>}
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
