import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { AuthorizationStatus, AppRoute } from '../../const';

import { loginAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selector';

import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

type formFieldset = {
  email: string;
  password: string;
  'agreement': string;
}

function LoginScreen(): JSX.Element {

  const { register, handleSubmit, formState: { errors } } = useForm<formFieldset>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authorizationStatus, navigate]);

  const onSubmit = (data: formFieldset) => {

    dispatch(loginAction({
      login: data.email,
      password: data.password,
    }
    ));
    navigate(-1);
  };

  return (
    <>
      <Helmet>
        <title>EscapeRoom. Login</title>
      </Helmet>

      <Header/>

      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"/>
            <img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt=""/>
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form className="login-form" action="#" onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>

                <div className="login-form__inputs">

                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                    <input type="email" id="email" placeholder="Адрес электронной почты" {...register('email', { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/ })} aria-invalid={errors.email ? 'true' : 'false'}/>
                    {errors.email?.type === 'required' && <><br/><span role="alert">Укажите,пожалуйста, почту</span></>}
                    {errors.email?.type === 'pattern' && <><br/><span role="alert">Введите корректный почтовый адрес</span></>}
                  </div>

                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">Пароль</label>
                    <input type="password" id="password" placeholder="Пароль минимум 3 символа" {...register('password', { required: true, pattern: /([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/ })} aria-invalid={errors.password ? 'true' : 'false'}/>
                    {errors.password?.type === 'required' && <><br/><span role="alert">Укажите, пожалуйста, пароль</span></>}
                    {errors.password?.type === 'pattern' && <><br/><span role="alert">Пароль должен содержать минимум три символа (букву и цифру)</span></>}
                  </div>

                </div>
                <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input type="checkbox" id="id-order-agreement" {...register('agreement', { required: true })} aria-invalid={errors.agreement ? 'true' : 'false'}/>
                {errors.agreement?.type === 'required' && <><br/><span role="alert">Ознакомтесь, пожалуйста, с правилами</span></>}
                <span className="custom-checkbox__icon">
                  <svg width="20" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-tick"></use>
                  </svg>
                </span>
                <span className="custom-checkbox__label">Я&nbsp;согласен с
                  <a className="link link--active-silver link--underlined" href="/">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default LoginScreen;
