import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RoomState } from './room.reducer';

export const getFeatureState = createFeatureSelector('room');
export const getRooms = createSelector(
  getFeatureState,
  (state: RoomState) => state.rooms
);

export const roomQueries = {
  getRooms
};
