import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const getFeatureState = createFeatureSelector("user");
export const getUsers = createSelector(
  getFeatureState,
  (state: UserState) => state.users
);

export const userQueries = {
  getUsers
};
