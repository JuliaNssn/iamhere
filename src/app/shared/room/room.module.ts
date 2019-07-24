import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { UserModule } from '../user/user.module';
import { RoomComponent } from './room.component';

@NgModule({
  declarations: [RoomComponent],
  imports: [CommonModule, MatCardModule, UserModule],
  exports: [RoomComponent]
})
export class RoomModule {}
