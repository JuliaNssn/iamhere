import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../shared/user/data-access/user.model';
import { UserFacade } from '../shared/user/user.facade';
import { CheckInFacade } from './../shared/check-in/check-in.facade';
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

  currentUser = {
    name: 'Jari'
  };

  isLoading = true;

  constructor(
    private userFacade: UserFacade,
    private roomFacade: RoomFacade,
    private checkinFacade: CheckInFacade
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onCheckIn(room: Room) {
    this.checkinFacade.checkIn(this.currentUser.name, room.name);
  }
}
