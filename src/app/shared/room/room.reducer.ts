import { createReducer, on } from "@ngrx/store";
import { Room } from "./data-access/room.model";
import { fromRoomsActions } from "./room.actions";

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
