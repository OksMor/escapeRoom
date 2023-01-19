import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getCurrentType } from '../../store/app-process/selector';
import { typeSet } from '../../store/app-process/app-process';
import { QUESTS_TYPES } from '../../const';

function QuestTypeList(): JSX.Element {

  const dispatch = useAppDispatch();
  const filterType = useAppSelector(getCurrentType);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {QUESTS_TYPES.map((item) => (
          <li key = {item.questType} className="filter__item"
            onClick={() => {
              dispatch(typeSet(item.questType));
            }}
          >
            <input type="radio" name="type" id={item.questType} checked={filterType === item.questType}/>
            <label className="filter__label" htmlFor={item.questType}>
              <svg className="filter__icon" width={26} height={30} aria-hidden="true">
                <use xlinkHref={item.icon}/>
              </svg>
              <span className="filter__label-text">{item.type}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export default QuestTypeList;
