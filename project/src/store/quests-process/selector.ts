import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getIsQuestsLoading = (state: State): boolean => state[NameSpace.Quests].isLoading;

export const getErrorStatus = (state: State): boolean => state[NameSpace.Quests].hasError;
