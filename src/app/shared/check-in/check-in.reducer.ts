import { createReducer, on } from '@ngrx/store';
import { fromCheckInsActions } from './check-in.actions';
import { UserAndRoom } from './data-access/check-in.model';

export interface CheckInState {
  checkIns: Array<UserAndRoom>;
}

export const initialRoomState: CheckInState = {
  checkIns: []
};

export const checkInReducer = createReducer<CheckInState>(
  initialRoomState,
  on(fromCheckInsActions.checkInsLoaded, (state, action) => {
    return { ...state, checkIns: action.payload.checkIns };
  })
);
