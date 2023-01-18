import { QuestType } from './../../const';
import { createSelector } from '@reduxjs/toolkit';
import { Quest } from '../../types/types';
import { State } from '../../types/state';
import { QuestLevel, NameSpace } from '../../const';

export const getQuests = (state: State): Quest[] => state[NameSpace.Quests].quests;

export const getCurrentLevel = (state: State): string => state[NameSpace.App].currentLevel;

export const getCurrentType = (state: State): string => state[NameSpace.App].currentType;

export const getFilteredQuests = createSelector(
  [getQuests, getCurrentLevel, getCurrentType],
  (quests, level, type) => {

    if (level === QuestLevel.Any) {
      if (type === QuestType.All) {
        return quests;
      }
      return quests.filter((quest) => quest.type === type);
    } else {
      if (type === QuestType.All) {
        return quests.filter((quest) => quest.level === level);
      }
      return quests.filter((quest) => {quest.type === type && quest.level === level});
    }

  }
);
