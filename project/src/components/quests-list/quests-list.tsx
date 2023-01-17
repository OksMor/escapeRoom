import { Quest } from '../../types/types';

import QuestCard from '../quest-card/quest-card';

type QuestsListProps = {
  quests: Quest[];
}

function QuestsList(props: QuestsListProps): JSX.Element {
  const { quests } = props;

  return (
    <div className="cards-grid">
      {quests.map((quest) => <QuestCard key={quest.id} quest={quest} />)}
    </div>
  );
}

export default QuestsList;
