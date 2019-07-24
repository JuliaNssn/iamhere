import { ActionReducerMap } from '@ngrx/store';
import { roomReducer, RoomState } from '../room/room.reducer';
import { userReducer, UserState } from '../user/user.reducer';

export interface State {
  user: UserState;
  room: RoomState;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  room: roomReducer
};
