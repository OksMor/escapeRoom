import { Quest } from '../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getCurrentQuest = (state: State): Quest | null => state[NameSpace.CurrentQuest].quest;

export const getIsCurrentQuestLoading = (state: State): boolean => state[NameSpace.CurrentQuest].isLoading;
