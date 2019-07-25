import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room } from './data-access/room.model';
import { loadRooms } from './room.actions';
import { RoomState } from './room.reducer';
import { roomQueries } from './room.selector';

@Injectable()
export class RoomFacade {
  rooms$: Observable<Array<Room>> = this.store.select(roomQueries.getRooms);

  constructor(private store: Store<RoomState>) {}

  loadRooms() {
    this.store.dispatch(loadRooms());
  }
}
