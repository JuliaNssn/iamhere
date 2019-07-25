import { createAction, props } from "@ngrx/store";
import { Room } from "./data-access/room.model";

export enum RoomActionTypes {
  LoadRooms = "[Rooms] Load Rooms",
  RoomsLoaded = "[Rooms] Rooms Loaded",
  LoadRoomsError = "[Rooms] Load Rooms Error"
}

export const loadRooms = createAction(RoomActionTypes.LoadRooms);
export const roomsLoaded = createAction(
  RoomActionTypes.RoomsLoaded,
  props<{ payload: { rooms: Array<Room> } }>()
);
export const loadRoomsError = createAction(
  RoomActionTypes.LoadRoomsError,
  props<{ payload: { error: any } }>()
);
export const fromRoomsActions = {
  loadRooms,
  roomsLoaded,
  loadRoomsError
};
