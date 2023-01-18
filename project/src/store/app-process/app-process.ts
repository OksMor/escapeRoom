import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../../types/state';
import { NameSpace, QuestLevel, QuestType } from '../../const';

const initialState: AppState = {
  currentType: QuestType.All,
  currentLevel: QuestLevel.Any,
};

export const appProcess = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    levelSet: (state, action: PayloadAction<string>) => {
      state.currentLevel = action.payload;
    },
    levelReset: (state) => {
      state.currentLevel = QuestLevel.Any;
    },
    typeSet: (state, action: PayloadAction<string>) => {
      state.currentType = action.payload;
    },
    typeReset: (state) => {
      state.currentType = QuestLevel.Any;
    },
  },
});

export const {levelSet, levelReset, typeSet, typeReset } = appProcess.actions;
