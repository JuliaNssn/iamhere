import { createReducer, on } from '@ngrx/store';
import { fromUserActions } from './user.actions';
import { User } from './user.model';

export interface UserState {
  users: Array<User>;
}

export const initialUserState: UserState = {
  users: []
};

export const userReducer = createReducer<UserState>(
  initialUserState,
  on(fromUserActions.usersLoaded, (state, action) => {
    return { ...state, users: action.payload.users };
  })
);
