import { Component } from '@angular/core';

import { CheckInFacade } from './shared/check-in/check-in.facade';
import { RoomFacade } from './shared/room/room.facade';
import { UserFacade } from './shared/user/user.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private userFacade: UserFacade,
    private roomFacade: RoomFacade,
    private checkInFacade: CheckInFacade
  ) {
    this.userFacade.loadUsers();
    this.roomFacade.loadRooms();
    // this.checkInFacade.loadCheckIns();
  }
}
