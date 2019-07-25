import { createReducer, on } from '@ngrx/store';
import { Room } from './data-access/room.model';
import { fromRoomsActions } from './room.actions';

export interface RoomState {
  rooms: Array<Room>;
}

export const initialRoomState: RoomState = {
  rooms: [
    {
      name: 'Elbe',
      users: []
    },
    {
      name: 'Havel',
      users: []
    },
    {
      name: 'Main',
      users: []
    },
    {
      name: 'Spree',
      users: []
    }
  ]
};

export const roomReducer = createReducer<RoomState>(
  initialRoomState,
  on(fromRoomsActions.roomsLoaded, (state, action) => {
    return { ...state, rooms: action.payload.rooms };
  })
);
