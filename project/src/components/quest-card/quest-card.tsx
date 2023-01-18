import { useNavigate } from 'react-router-dom';

import { Quest } from '../../types/types';
import { AppRoute, DIFFICULTY } from '../../const';

type QuestCardProps = {
  quest: Quest;
}

function QuestCard(props: QuestCardProps): JSX.Element {
  const { quest } = props;

  const navigate = useNavigate();

  return (
    <div className="quest-card" onClick={() => navigate(`${AppRoute.Quest}/${quest.id}`)}>
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={quest.previewImgWebp}/>
          <img src={quest.previewImg} width="344" height="232" alt={quest.title}/>
        </picture>
      </div>

      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <a className="quest-card__link" href={`${AppRoute.Quest}/${quest.id}`}>{quest.title}</a>
        </div>
        {/* <div class="quest-card__info-wrapper"><a class="quest-card__link" href="quest.html">Маньяк</a><span class="quest-card__info">[сегодня,&nbsp;17:00. наб. реки Карповки&nbsp;5, лит&nbsp;П<br>м. Петроградская]</span> */}

        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{quest.peopleMinMax[0]}&ndash;{quest.peopleMinMax ? quest.peopleMinMax[1] : ''}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{DIFFICULTY[quest.level]}
          </li>
        </ul>
        <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>
      </div>
    </div>
  );
}

export default QuestCard;
