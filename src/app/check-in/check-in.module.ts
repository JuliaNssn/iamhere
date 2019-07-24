import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RoomModule } from '../shared/room/room.module';
import { UserModule } from '../shared/user/user.module';
import { CheckInComponent } from './check-in.component';

@NgModule({
  declarations: [CheckInComponent],
  imports: [CommonModule, MatButtonModule, UserModule, RoomModule],
  exports: [CheckInComponent]
})
export class CheckInModule {}
