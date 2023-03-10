import { BookingInfo } from './../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getQuestBooking = (state: State) : BookingInfo | null => state[NameSpace.BookingQuest].booking;
