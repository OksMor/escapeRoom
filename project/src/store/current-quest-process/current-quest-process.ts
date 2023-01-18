import { fetchCurrentQuestAction } from '../api-actions';
import { createSlice } from '@reduxjs/toolkit';
import { CurrentQuestState } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: CurrentQuestState = {
  quest: null,
  isLoading: true
};

export const currentQuestProcess = createSlice({
  name: NameSpace.CurrentQuest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentQuestAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCurrentQuestAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
