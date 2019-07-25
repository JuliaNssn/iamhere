import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CheckInState } from './check-in.reducer';

export const getFeatureState = createFeatureSelector('checkIn');
export const getCheckIns = createSelector(
  getFeatureState,
  (state: CheckInState) => state.checkIns
);

export const checkInQueries = {
  getCheckIns
};
