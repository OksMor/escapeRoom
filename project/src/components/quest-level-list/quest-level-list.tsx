import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getCurrentLevel } from '../../store/app-process/selector';
import { levelSet } from '../../store/app-process/app-process';
import { QUESTS_LEVELS } from '../../const';

function QuestLevelList(): JSX.Element {

  const dispatch = useAppDispatch();
  const filterType = useAppSelector(getCurrentLevel);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {QUESTS_LEVELS.map((item) => (
          <li key = {item.questLevel} className="filter__item"
            onClick={() => {
              dispatch(levelSet(item.questLevel));
            }}
          >
            <input type="radio" name="level" id={item.questLevel} checked={filterType === item.questLevel}/>
            <label className="filter__label" htmlFor={item.questLevel}>
              <span className="filter__label-text">{item.level}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export default QuestLevelList;
