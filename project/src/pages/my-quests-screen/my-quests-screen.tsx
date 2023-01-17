import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import QuestsList from '../../components/quests-list/quests-list';
import { useAppSelector } from '../../hooks/hooks';
import { getIsQuestsLoading } from '../../store/quests-process/selector';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { getFilteredQuests } from '../../store/app-process/selector';

function MyQuestsScreen(): JSX.Element {

  const isQuestsLoading = useAppSelector(getIsQuestsLoading);
  const quests = useAppSelector(getFilteredQuests);

  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          {/* <picture>
            <source type="image/webp" srcset="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"><img src="img/content/maniac/maniac-bg-size-m.jpg" srcset="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="">
          </picture> */}
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          {isQuestsLoading ? <LoadingScreen/> : <QuestsList quests={quests} />}
        </div>
      </main>
    <Footer/>
  </div>
  );
}

export default MyQuestsScreen;
