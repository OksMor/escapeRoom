import { useNavigate, Link } from 'react-router-dom';

import { Quest } from '../../types/types';
import { AppRoute, LEVEL_QUEST } from '../../const';

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
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${quest.id}`}>{quest.title}</Link>
        </div>
        <ul className="tags quest-card__tags">
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
      </div>
    </div>
  );
}

export default QuestCard;
