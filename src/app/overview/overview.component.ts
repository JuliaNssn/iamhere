import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckInFacade } from '../shared/check-in/check-in.facade';
import { Room } from '../shared/room/data-access/room.model';
import { RoomFacade } from '../shared/room/room.facade';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  rooms$: Observable<Array<Room>> = this.roomFacade.rooms$;

  constructor(
    private roomFacade: RoomFacade,
    private checkInFacade: CheckInFacade
  ) {}
}
