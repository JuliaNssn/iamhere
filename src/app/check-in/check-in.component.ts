import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../shared/user/data-access/user.model';
import { UserFacade } from '../shared/user/user.facade';
import { Room } from './../shared/room/data-access/room.model';
import { RoomFacade } from './../shared/room/room.facade';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  users$: Observable<Array<User>> = this.userFacade.users$;
  rooms$: Observable<Array<Room>> = this.roomFacade.rooms$;

  isLoading = true;

  constructor(private userFacade: UserFacade, private roomFacade: RoomFacade) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  onCheckIn(room: Room) {}
}
