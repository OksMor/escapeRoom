import { useRef, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { AuthData } from '../../types/types';
import { AppRoute, AuthorizationStatus, ErrorMessage, EMAIL_PATTERN, PASSWORD_PATTERN, SingInField } from '../../const';

import { loginAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selector';

import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function getSignInErrorMessage(inputId: string): string {
  if (inputId === SingInField.UserEmail) {
    return ErrorMessage.InvalidEmail;
  }
  if (inputId === SingInField.UserPassword) {
    return ErrorMessage.InvalidPassword;
  }
  return '';
}

function LoginScreen(): JSX.Element {

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [errFieldId, setErrFieldId] = useState('');

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {

      if (!EMAIL_PATTERN.test(emailRef.current?.value)) {
        setErrFieldId(SingInField.UserEmail);
        return;
      }
      if (!PASSWORD_PATTERN.test(passwordRef.current?.value)) {
        setErrFieldId(SingInField.UserPassword);
        return;
      }

      onSubmit({
        login: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authorizationStatus, navigate]);

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
            <form className="login-form" action="#" onSubmit={handleSubmit}>
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>

                <div className="sign-in__message">
                  <p>{getSignInErrorMessage(errFieldId)}</p>
                </div>

                <div className="login-form__inputs">
                  <div className={`custom-input login-form__input ${errFieldId === SingInField.UserEmail ? 'sign-in__field--error' : ''}`}>
                    {/* {`custom-input login-form__input ${errFieldId === SingInField.UserEmail ? 'sign-in__field--error' : ''}`} custom-input login-form__input*/}
                    <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                    <input type="email" id="email" name="email" placeholder="Адрес электронной почты" required ref={emailRef}/>
                  </div>
                  <div className={`custom-input login-form__input ${errFieldId === SingInField.UserPassword ? 'sign-in__field--error' : ''}`}>
                    {/* {`sign-in__field ${errFieldId === SingInField.UserPassword ? 'sign-in__field--error' : ''}`}custom-input login-form__input  */}
                    <label className="custom-input__label" htmlFor="password">Пароль</label>
                    <input type="password" id="password" name="password" placeholder="Пароль минимум 3 символа" required ref={passwordRef}/>
                  </div>
                </div>
                <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input type="checkbox" id="id-order-agreement" name="user-agreement" required/>
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
