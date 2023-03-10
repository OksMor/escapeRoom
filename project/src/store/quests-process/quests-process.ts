import { fetchQuestsAction } from '../api-actions';
import { QuestsState } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState: QuestsState = {
  quests: [],
  isLoading: true,
  hasError: false,
};

export const questsProcess = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  }
});
