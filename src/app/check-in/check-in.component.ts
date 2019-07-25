import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Room } from "../shared/room/data-access/room.model";
import { RoomFacade } from "../shared/room/room.facade";
import { User } from "../shared/user/data-access/user.model";
import { UserFacade } from "../shared/user/user.facade";

@Component({
  selector: "app-check-in",
  templateUrl: "./check-in.component.html",
  styleUrls: ["./check-in.component.sass"]
})
export class CheckInComponent {
  users$: Observable<Array<User>> = this.userFacade.users$;
  rooms$: Observable<Array<Room>> = this.roomFacade.rooms$;

  constructor(private userFacade: UserFacade, private roomFacade: RoomFacade) {}
}
