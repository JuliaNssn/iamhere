import { createReducer, on } from "@ngrx/store";
import { User } from "./data-access/user.model";
import { fromUserActions } from "./user.actions";

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
