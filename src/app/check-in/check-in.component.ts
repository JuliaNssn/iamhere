import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomFacade } from '../shared/room/room.facade';
import { Room } from '../shared/room/room.model';
import { UserFacade } from '../shared/user/user.facade';
import { User } from '../shared/user/user.model';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.sass']
})
export class CheckInComponent {
  users$: Observable<Array<User>> = this.userFacade.users$;
  rooms$: Observable<Array<Room>> = this.roomFacade.rooms$;

  constructor(private userFacade: UserFacade, private roomFacade: RoomFacade) {}
}
