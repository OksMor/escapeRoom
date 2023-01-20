import { Booking } from '../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getReviews = (state: State): Booking[] => state[NameSpace.Booking].comments;

export const getIsReviewsLoading = (state: State): boolean => state[NameSpace.Booking].isLoading;
