import { Component, Input } from '@angular/core';
import { User } from '../user/data-access/user.model';

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

  @Input()
  userIsCheckedIn = false;

  get hasUsers(): boolean {
    return this.checkedInUsers ? this.checkedInUsers.length > 0 : false;
  }

  get tooMuchUsers(): boolean {
    return this.checkedInUsers ? this.checkedInUsers.length > 5 : false;
  }
}
