import { createAction, props } from '@ngrx/store';
import { UserAndRoom } from './data-access/check-in.model';

export enum CheckInActionTypes {
  LoadCheckIns = '[CheckIn] Load CheckIns',
  CheckInsLoaded = '[CheckIn] CheckIns Loaded',
  LoadCheckInsError = '[CheckIn] Load CheckIns Error',
  CheckIn = '[CheckIn] Check In User'
}

export const loadCheckIns = createAction(CheckInActionTypes.LoadCheckIns);
export const checkInsLoaded = createAction(
  CheckInActionTypes.CheckInsLoaded,
  props<{ payload: { checkIns: Array<UserAndRoom> } }>()
);
export const loadCheckInsError = createAction(
  CheckInActionTypes.LoadCheckInsError,
  props<{ payload: { error: any } }>()
);
export const checkIn = createAction(
  CheckInActionTypes.CheckIn,
  props<{ payload: { userAndRoom: UserAndRoom } }>()
);
export const fromCheckInsActions = {
  loadCheckIns,
  checkInsLoaded,
  loadCheckInsError,
  checkIn
};
