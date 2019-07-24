import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export enum UserActionTypes {
  LoadUsers = '[Users] Load Users',
  UsersLoaded = '[Users] Users Loaded',
  LoadUsersError = '[Users] Load Users Error'
}

export const loadUsers = createAction(UserActionTypes.LoadUsers);
export const usersLoaded = createAction(
  UserActionTypes.UsersLoaded,
  props<{ payload: { users: Array<User> } }>()
);
export const loadUsersError = createAction(
  UserActionTypes.LoadUsersError,
  props<{ payload: { error: any } }>()
);
export const fromUserActions = {
  loadUsers,
  usersLoaded,
  loadUsersError
};
