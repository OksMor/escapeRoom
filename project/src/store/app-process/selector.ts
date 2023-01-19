import { createSelector } from '@reduxjs/toolkit';
import { Quest } from '../../types/types';
import { State } from '../../types/state';
import { QuestLevel, QuestType, NameSpace } from '../../const';

export const getQuests = (state: State): Quest[] => state[NameSpace.Quests].quests;

export const getCurrentLevel = (state: State): string => state[NameSpace.App].currentLevel;

export const getCurrentType = (state: State): string => state[NameSpace.App].currentType;

// export const getFilteredQuests = createSelector(
//   [getQuests, getCurrentLevel, getCurrentType],
//   (quests, levelQuest, typeQuest) => {

//     if (levelQuest === QuestLevel.Any) {
//       if (typeQuest === QuestType.All) {
//         return quests;
//       }
//       return quests.filter((quest) => quest.type === typeQuest);
//     } else {
//       if (typeQuest === QuestType.All) {
//         return quests.filter((quest) => quest.level === levelQuest);
//       }
//       return quests.filter((quest) => quest.type === typeQuest && quest.level === levelQuest);
//     }

//   }
// );

const getFilterGenreQuests = createSelector(
  [getQuests, getCurrentType],
  (quests: Quest[], filterType: string) => {

    let filteredQuests = quests.slice();

    if (filterType !== QuestType.All) {
      filteredQuests = quests.filter((item: Quest) => item.type === filterType).slice();
    }

    return filteredQuests;
  }
);

export const getFilterQuests = createSelector(
  [getFilterGenreQuests, getCurrentLevel],
  (quests: Quest[], filterType: string) => {

    let filteredQuests = quests.slice();

    if (filterType !== QuestLevel.Any) {
      filteredQuests = quests.filter((item: Quest) => item.level === filterType).slice();
    }

    return filteredQuests;
  }
);
