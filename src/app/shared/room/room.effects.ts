import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
import { UserAndRoom } from '../check-in/data-access/check-in.model';
import { RoomActionTypes, roomsLoaded } from './room.actions';
import { RoomFacade } from './room.facade';

@Injectable()
export class RoomEffects {
  addUserToRoom$ = createEffect(() =>
    this.actions.pipe(
      ofType(RoomActionTypes.AddUserToRoom),
      map(
        (action: { payload: { userAndRoom: UserAndRoom } }) =>
          action.payload.userAndRoom
      ),
      withLatestFrom(this.roomFacade.rooms$),
      map(([userAndRoom, rooms]) => {
        console.log(userAndRoom);
        return rooms.map(room => {
          let users = [
            ...room.users.filter(user => user.name !== userAndRoom.name)
          ];

          if (userAndRoom.room === room.name) {
            users = [
              {
                name: userAndRoom.name
              },
              ...users
            ];
          }

          return {
            ...room,
            users
          };
        });
      }),
      map(rooms => roomsLoaded({ payload: { rooms } }))
    )
  );

  constructor(private actions: Actions, private roomFacade: RoomFacade) {}
}
