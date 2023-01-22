import { BookingInfo } from './../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getQuestBooking = (state: State) : BookingInfo[] => state[NameSpace.BookingQuest].booking;

export const getIsBookingInfoLoading = (state: State): boolean => state[NameSpace.BookingQuest].isLoading;
