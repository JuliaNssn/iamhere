import { createAction, props } from '@ngrx/store';
import { UserAndRoom } from '../check-in/data-access/check-in.model';
import { Room } from './data-access/room.model';

export enum RoomActionTypes {
  LoadRooms = '[Rooms] Load Rooms',
  RoomsLoaded = '[Rooms] Rooms Loaded',
  LoadRoomsError = '[Rooms] Load Rooms Error',
  AddUserToRoom = '[Rooms] Add User To Room'
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
export const addUserToRoom = createAction(
  RoomActionTypes.AddUserToRoom,
  props<{ payload: { userAndRoom: UserAndRoom } }>()
);
export const fromRoomsActions = {
  loadRooms,
  roomsLoaded,
  loadRoomsError
};
