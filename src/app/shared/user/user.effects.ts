import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { User } from './data-access/user.model';
import { UserService } from './data-access/user.service';
import { UserActionTypes, usersLoaded } from './user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions.pipe(
      ofType(UserActionTypes.LoadUsers),
      switchMap(() => this.userService.loadUser()),
      map((users: Array<User>) =>
        usersLoaded({
          payload: { users }
        })
      )
    )
  );

  constructor(private actions: Actions, private userService: UserService) {}
}
