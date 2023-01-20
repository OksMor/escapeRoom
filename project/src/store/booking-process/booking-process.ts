import { createSlice } from '@reduxjs/toolkit';
import { fetchBookingAction } from '../api-actions';
import { BookingState } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: BookingState = {
  comments: [],
  isLoading: true
};

export const bookingProcess = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookingAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBookingAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBookingAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
