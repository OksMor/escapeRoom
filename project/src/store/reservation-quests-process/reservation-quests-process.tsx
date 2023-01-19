import { fetchReservationQuestsAction } from '../api-actions';
import { createSlice } from '@reduxjs/toolkit';
import { ReservationQuestsState } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: ReservationQuestsState = {
  quests: [],
  isLoading: true
};

export const reservationQuestsProcess = createSlice({
  name: NameSpace.ReservationQuests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReservationQuestsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchReservationQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchReservationQuestsAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
