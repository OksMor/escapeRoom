import { createSlice } from '@reduxjs/toolkit';
import { fetchBookingAction } from '../api-actions';
import { BookingState } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: BookingState = {
  booking: [],
  isLoading: true
};

export const bookingProcess = createSlice({
  name: NameSpace.BookingQuest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookingAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBookingAction.fulfilled, (state, action) => {
        state.booking = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBookingAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
