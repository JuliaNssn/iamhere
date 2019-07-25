import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, skip, take, withLatestFrom } from 'rxjs/operators';
import { User } from './data-access/user.model';
import { UserService } from './data-access/user.service';
import { UserActionTypes, usersLoaded } from './user.actions';
import { UserFacade } from './user.facade';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions.pipe(
      ofType(UserActionTypes.LoadUsers),
      mergeMap(() =>
        this.userService.users$.pipe(
          skip(1),
          withLatestFrom(this.userFacade.users$),
          take(5),
          map(([user, users]: [User, Array<User>]) =>
            usersLoaded({
              payload: { users: [...users, user] }
            })
          )
        )
      )
    )
  );

  constructor(
    private actions: Actions,
    private userService: UserService,
    private userFacade: UserFacade
  ) {}
}
