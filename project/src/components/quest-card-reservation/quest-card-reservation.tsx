import { Link } from 'react-router-dom';
import {useAppDispatch} from '../../hooks/hooks';

import { UserBooking } from '../../types/types';
import { AppRoute, LEVEL_QUEST, DATE_QUEST } from '../../const';
import { deleteReservationQuestAction } from '../../store/api-actions';

type QuestCardProps = {
  quest: UserBooking;
}

function QuestCardReservation(props: QuestCardProps): JSX.Element {
  const { quest } = props;

  const dispatch = useAppDispatch();

  const str = quest.location.address;
  const from = str.search('м.');
  const to = str.length;
  const address = str.substring(0, from);
  const metro = str.substring(from, to);

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={quest.quest.previewImgWebp}/>
          <img src={quest.quest.previewImg} width="344" height="232" alt={quest.quest.title}/>
        </picture>
      </div>

      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${quest.id}`}>{quest.quest.title}</Link>
          <span className="quest-card__info">[{DATE_QUEST[quest.date]},&nbsp;{quest.time}&nbsp;{address}<br/>{metro}]</span>
        </div>

        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{quest.peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{LEVEL_QUEST[quest.quest.level]}
          </li>
        </ul>
        <button className="btn btn--accent btn--secondary quest-card__btn" type="button" onClick={() => {dispatch(deleteReservationQuestAction(String(quest.id)));}}>Отменить</button>
      </div>
    </div>
  );
}

export default QuestCardReservation;
