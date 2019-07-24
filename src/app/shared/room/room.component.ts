import { Component, Input } from '@angular/core';

import { User } from './../user/user.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  @Input()
  roomImage: string;

  @Input()
  name: string;

  @Input()
  checkedInUsers: User[];
}
