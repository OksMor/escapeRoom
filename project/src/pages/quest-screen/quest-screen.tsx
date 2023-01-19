import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

import { AppRoute, LEVEL_QUEST, TYPE_QUEST } from '../../const';

import { fetchCurrentQuestAction } from '../../store/api-actions';
import { getCurrentQuest, getIsCurrentQuestLoading } from '../../store/current-quest-process/selector';
// import { getIsAuthorized } from '../../store/user-process/selector';

import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import NotFoundScreen from '../no-found-screen/no-found-screen';

function QuestScreen(): JSX.Element {

  const dispatch = useAppDispatch();
  const params = useParams();

  const quest = useAppSelector(getCurrentQuest);
  const isCurrentQuestLoading = useAppSelector(getIsCurrentQuestLoading);
  // const isAuthorized = useAppSelector(getIsAuthorized);

  useEffect(() => {
    if (params.id && quest?.id.toString() !== params.id) {
      dispatch(fetchCurrentQuestAction(params.id));
    }
  }, [params.id, dispatch, quest?.id]);

  // useEffect(() => {
  //   if (isAuthorized) {
  //     dispatch(fetchFavoritesFilmsAction());
  //   }
  // }, [dispatch, isAuthorized]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  if (isCurrentQuestLoading && quest?.id.toString() !== params.id) {
    return <LoadingScreen />;
  }

  return quest ? (
    <>
      <Helmet>
        <title>EscapeRoom. {quest.title}</title>
      </Helmet>

      <Header/>

      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${String(quest.coverImgWebp)} 2x`}/>
            <img src={`${quest.coverImg}`} srcSet={`${quest.coverImg} 2x`} width="1366" height="768" alt={quest.title}/>
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{quest.title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{TYPE_QUEST[quest.type]}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{quest.peopleMinMax[0]}&ndash;{quest.peopleMinMax ? quest.peopleMinMax[1] : ''}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>{LEVEL_QUEST[quest.level]}
              </li>
            </ul>
            <p className="quest-page__description">{quest.description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={AppRoute.SignIn}>Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  ) : <NotFoundScreen/>;
}

export default QuestScreen;
