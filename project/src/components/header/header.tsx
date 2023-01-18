import { Link, useLocation } from 'react-router-dom'; //, useNavigate
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logoutAction } from '../../store/api-actions';
import { getIsAuthorized, } from '../../store/user-process/selector';

function Header(): JSX.Element {

  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const isAuthorized = useAppSelector(getIsAuthorized);
  // const authorizedUser = useAppSelector(getAuthorizedUser);

  const getUserBlock = () => {
    if (isAuthorized) {
      return (
        <Link className="btn btn--accent header__side-item"
          to="/"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >Выйти
        </Link>
      );
    } else {
      return (
        <Link className="btn header__side-item header__login-btn" to={AppRoute.SignIn}>Вход</Link>
      );
    }
  };

  return (
    <header className="header">
      <div className="container container--size-l">

        {(location.pathname === AppRoute.Root) ?
          <span className="logo header__logo">
            <svg width="134" height="52" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </span> :
          <Link className="logo header__logo" to={AppRoute.Root}>
            <svg width="134" height="52" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </Link>}

        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className={`link ${AppRoute.Root === location.pathname ? 'active' : ''}`} href={AppRoute.Root}>Квесты</a>
            </li>
            <li className="main-nav__item">
              <a className={`link ${AppRoute.Contacts === location.pathname ? 'active' : ''}`} href={AppRoute.Contacts}>Контакты</a>
            </li>

            {isAuthorized ?
              <li className="main-nav__item">
                <a className={`link ${AppRoute.MyReservations === location.pathname ? 'active' : ''}`} href={AppRoute.MyReservations}>Мои бронирования</a>
              </li> : ''}
          </ul>
        </nav>
        <div className="header__side-nav">
          {getUserBlock()}
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
