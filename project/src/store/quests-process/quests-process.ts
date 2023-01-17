import { fetchQuestsAction } from '../api-actions';
import { QuestsState } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState: QuestsState = {
  quests: [],
  isLoading: true,
};

export const questsProcess = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
