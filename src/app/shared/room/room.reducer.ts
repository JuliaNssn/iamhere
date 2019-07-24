import { createReducer, on } from '@ngrx/store';
import { fromRoomsActions } from './room.actions';
import { Room } from './room.model';

export interface RoomState {
  rooms: Array<Room>;
}

export const initialRoomState: RoomState = {
  rooms: []
};

export const roomReducer = createReducer<RoomState>(
  initialRoomState,
  on(fromRoomsActions.roomsLoaded, (state, action) => {
    return { ...state, rooms: action.payload.rooms };
  })
);
