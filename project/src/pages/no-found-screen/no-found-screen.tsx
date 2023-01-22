import { Helmet } from 'react-helmet-async';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>EscapeRoom. Page not found</title>
      </Helmet>

      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"/>
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt=""/>
          </picture>
        </div>
        <h1 className="title title--size-m page-content__title">404. Page not found</h1>
        <a className="link" href="/">Back to the main page</a>
      </main>
    </>
  );
}

export default NotFoundScreen;
