import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { RoomActionTypes, roomsLoaded } from "./room.actions";
import { Room } from "./room.model";
import { RoomService } from "./room.service";

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
