import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appProcess } from './app-process/app-process';
import { userProcess } from './user-process/user-process';
import { questsProcess } from './quests-process/quests-process';
import { currentQuestProcess } from './current-quest-process/current-quest-process';
// import { reviewsProcess } from './reviews-process/reviews-process';
import { reservationQuestsProcess } from './reservation-quests-process/reservation-quests-process';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Quests]: questsProcess.reducer,
  [NameSpace.CurrentQuest]: currentQuestProcess.reducer,
  // [NameSpace.Reviews]: reviewsProcess.reducer,
  [NameSpace.ReservationQuests]: reservationQuestsProcess.reducer,
});
