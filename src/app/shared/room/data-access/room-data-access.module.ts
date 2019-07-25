import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RoomService } from "./room.service";

@NgModule({
  imports: [CommonModule],
  providers: [RoomService]
})
export class RoomDataAccessModule {}
