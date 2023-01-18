import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// import Logo from '../../components/logo/logo';

import './no-found-screen.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>EscapeRoom. Page not found</title>
      </Helmet>
      <header className="page-header user-page__head">

      </header>
      <main>
        <h1 className="page-title">404. Page not found</h1>
        <Link className="link" to="/">Back to the main page</Link>
      </main>
    </div>
  );
}

export default NotFoundScreen;
