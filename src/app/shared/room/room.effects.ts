import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Room } from './data-access/room.model';
import { RoomService } from './data-access/room.service';
import { RoomActionTypes, roomsLoaded } from './room.actions';

@Injectable()
export class RoomEffects {
  loadRooms$ = createEffect(() =>
    this.actions.pipe(
      ofType(RoomActionTypes.LoadRooms),
      switchMap(() => this.roomService.loadRooms()),
      map((rooms: Array<Room>) =>
        roomsLoaded({
          payload: { rooms }
        })
      )
    )
  );

  constructor(private actions: Actions, private roomService: RoomService) {}
}
