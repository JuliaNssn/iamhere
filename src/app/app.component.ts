import { Component } from '@angular/core';
import { RoomFacade } from './shared/room/room.facade';
import { UserFacade } from './shared/user/user.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userFacade: UserFacade, private roomFacade: RoomFacade) {
    this.userFacade.loadUsers();
    this.roomFacade.loadRooms();
  }
}
