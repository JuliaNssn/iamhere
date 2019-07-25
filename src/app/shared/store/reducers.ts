import { ActionReducerMap } from '@ngrx/store';
import { checkInReducer, CheckInState } from '../check-in/check-in.reducer';
import { roomReducer, RoomState } from '../room/room.reducer';
import { userReducer, UserState } from '../user/user.reducer';

export interface State {
  user: UserState;
  room: RoomState;
  checkIn: CheckInState;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  room: roomReducer,
  checkIn: checkInReducer
};
